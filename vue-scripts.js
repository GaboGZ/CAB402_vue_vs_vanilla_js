/* 
  QUT - CAB402 
  Student: Gabriel Garate
  Student No: N10023780

  This file contains all Vue.JS app examples.
*/

/* Counter Vue App*/
const counterApp = Vue.createApp({
  
  data: () => ({
    title: 'Counter Vue.JS',
    count: 0
  }),
  methods: {
    decrease() {
      this.count--;
    },
    increase() {
      this.count++;
    }
  }

}).mount('#app__counter-vue')

/* Todo List App*/
const todoApp = Vue.createApp({
  
  data: () => ({
    title: 'Todo Vue.JS',
    items: [
      { title: 'Item 1', editable: false },
      { title: 'Item 2', editable: false }
    ],
    newItem: null
  }),
  methods: {
    add(itemTitle) {
      let item = {
        title: itemTitle,
        editable: false
      }
      this.items.push(item);
      this.newItem = null;
    },
    remove(index){
      this.items.splice(index,1);
    }
  }

}).mount('#app__todo-vue')