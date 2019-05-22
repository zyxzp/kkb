import {Component} from '@angular/core';
import {HeaderComponent} from './Header.component';

//标注：声明组件的元信息
@Component({
  //标签名
  selector: 'app-root',
  //html地址
  templateUrl: './App.component.html',
  //样式地址s
  styleUrls: ['./App.component.css']
})

export class AppComponent{
  private a:number=12;
}
