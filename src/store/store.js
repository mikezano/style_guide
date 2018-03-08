import Vue from 'vue';
import Vuex from 'vuex';
import registry from './registry';

Vue.use(Vuex);

export const store = new Vuex.Store({

	state: {
		counter: 2,
		registry: registry,
		isPlaying: true
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