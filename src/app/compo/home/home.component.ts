import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { blogData } from './home.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  formvalue!: FormGroup;
  blogModelobj:blogData = new blogData;
  GetBlog:any;
  data:any;
  username:any;
  Getblog:any;

  constructor(private dis:AuthService, private form:FormBuilder)
  {
    this.username = sessionStorage.getItem('username');
    dis.Getblog().subscribe((display)=>
    {
      // console.warn("display",display)
      console.log(display);
      this.Getblog=display;
    }
    );
    // this.loadBlogs();
    
  }

  refresh(){
    location.reload();
  }

  ngOnInit(): void {
    // this.userName = sessionStorage.getItem('username');
    this.formvalue = this.form.group({
    username: this.username,
    title: [''],
    description: [''],
    url:['']
  })

}

loadBlogs(){
  this.dis.GetblogById(this.username).subscribe((display)=>
  {
    // console.warn("display",display)
    this.GetBlog=display;
    console.warn(display);
  }
  );
}
}
