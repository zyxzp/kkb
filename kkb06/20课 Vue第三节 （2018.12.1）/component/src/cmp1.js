import Vue from 'vue/dist/vue.esm';

export default Vue.component('cmp1', {
  props: ['name', 'list'],
  data(){
    return {a: 77, b: 55};
  },
  template: `
<div>
  姓名：{{name}}<br/>
  <ul>
    <li v-for="item in list">{{item}}</li>
  </ul>
</div>
`
});
