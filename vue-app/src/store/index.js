
import { createStore } from "vuex";

export default createStore({

  state: {
    allCourses: [],
    allProfs: []
  },

  mutations: {
    setCourseNames(state, payload){
      //state.ecourse = payload
      state.allCourses.push(payload)
    },
    setCourseProfs(state, payload){
      //state.prof = payload
      state.allProfs.push(payload)
    }
  },

  getters:{
    getAllCourseNames: state => state.allCourses || [],
    getAllProfNames: state => state.allProfs || [],
  },

  actions: {
    async getCname(context){

      let ses_uloga_id = sessionStorage.getItem('id_uloga')
      let url = "http://localhost:3000/eCourses/" + ses_uloga_id
      
      await fetch(url)
      .then(response => {
        response.json().then(parsedJson => {

          let eCourses = parsedJson;
          console.log("Roka store" + eCourses)

          context.commit("setCourseNames")

            
        }) 
       })
    }
  },
  modules: {},

});

/*
export default createStore({
  state: {
    allBooks:[],
    allBooksfromDB:[],
    myListBooks:[],
  },
*/