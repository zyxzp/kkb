import Vue from 'vue/dist/vue.esm';
//import Cmp1 from './cmp1';
import MyDialog from './my-dialog';

/*
let cmp=new Cmp1({
  propsData: {
    name: '张三',
    list: [88, 99, 27]
  }
});

let vm=cmp.$mount();

console.log(vm.$el);

if(vm.$el.querySelector('li').innerHTML=='88'){
  console.log('正确');
}else{
  console.log('失败');
}
*/

let vm=new Vue({
  el: '#div1',
  data: {
    type: ''
  },
  //局部组件
  template: `
<div>
  <my-dialog>
    <template slot="title">标题</template>
    一些文字文字文字
    <ul>
      <li>asdfas</li>
      <li>asdfas</li>
    </ul>
  </my-dialog>
</div>
`
})
