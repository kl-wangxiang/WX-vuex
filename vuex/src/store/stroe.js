import  Vue from 'vue';
import  Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    products:[
      {name:"马云",price:"200亿"},
      {name:"马化腾",price:"150亿"},
      {name:"王健林",price:"100亿"},
      {name:"王思聪",price:"4亿"},
    ]
  },
  getters:{
    saleProoduct:(state)=>{
      var saleProoduct = state.products.map((item)=>{
        return {
          name:'**' + item.name + "**",
          price:"$$" + item.price + "$$"
        }
      });
      return saleProoduct;
    }
  }
})
