import Vue from 'vue';
import Vuex from 'vuex';
import registry from './registry';

Vue.use(Vuex);

export const store = new Vuex.Store({

	state: {
		counter: 2,
		registry: registry,
		isPlaying: true,
		fromEl: null,
		toEl: null,
		isTransitioning: false,
		scrollPosition: 0
	},
	getters: {
		tripleCounter: state => {
			return state.counter * 3;
		},
		getComponent: (state, getters)=>(name)=>{
			var result  = state.registry.get(name);
			return result;
		},
		getComponent: (state, getters)=>(name)=>{
			var result  = state.registry.get(name);
			return result;
		},
		getFiles: (state, getters)=>()=>{
			var result = state.registry.buildRegistry();
			return result;
		},
		getPlayingState: state =>{
			return state.isPlaying;
		},
		getHtmlSingleFiles: (state, getters)=>()=>{
			var result = state.registry.buildHtmlSingleFiles();
			return result;
		},
		getHtmlSingleFile: (state, getters)=>(name)=>{;
			return state.registry.singleFileHash[name];
		},
		getScrollPosition: (state, getters)=>()=>{
			return state.scrollPosition;
		}
	},
	mutations: {
		increment: (state, num) => {
			state.counter += num;
		},
		decrement: (state) => {
			state.counter--;
		},
		toggleIsPlaying: (state) =>{
			state.isPlaying = !state.isPlaying;
		},
		toggleIsTransitioning: (state) =>{
			state.isTransitioning = !state.isTransitioning;
		},
		setFromEl: (state, el) =>{
			state.fromEl = el;
		},
		setToEl: (state, el) =>{
			state.toEl = el;
		},
		setScrollPosition: (state, el) =>{
			console.log("store scroll pos:", el)
			state.scrollPosition = el;
		}
	},
	actions: {
		toggleIsPlaying({commit}){
			commit('toggleIsPlaying');
		},
		//parameter deconstruct
		asyncDecrement: ({ commit }, asyncNum) => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit('decrement', asyncNum.by);
					resolve();
				}, asyncNum.duration);
			});
		}
	}
});