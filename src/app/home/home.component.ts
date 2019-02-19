import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../data.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  h1Style: boolean = false;
  test: string = "nirav"
  isOpen: boolean = false
  name: string = "bhan Name"
  gray: boolean = false;
  users: any;
  usersData: any;
  private filteredUser: any;
  
  constructor(private data: DataService) {

  }

  toggleValue(){
    this.isOpen = !this.isOpen;
    this.gray = !this.gray
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      this.usersData = this.users.data;
      this.filteredUser = this.users.data;
      console.log(this.users)
    })    
  }

  firstClick(){
    // this.h1Style = !this.h1Style;
    // this.data.firstClick(); 
  }

  // ----------------------Start Filter----------------------
  // Filter code by getter/setter way
  private _filter: string;
  get input_filter1(): string{
    return this._filter;
  }
  set input_filter1(value: string){
    this._filter = value;
    this.filterData(this._filter);
  }
  filterData(filterBy: string){
    if(filterBy){
      this.filteredUser = this.usersData.filter(function(obj){
        let fullName = obj.first_name+" "+obj.last_name;
        return (fullName.toLowerCase().indexOf(filterBy.toLowerCase()) != -1)
      })
    }else{
      this.filteredUser = this.usersData;
    }
  }

  // Filter without getter/setter
  onFilterChange(value: string){
    this.filterData(value);
  }
  // ----------------------End Filter----------------------

  // ----------------------ViewChild and ViewChildren start Focus code----------------------
  @ViewChild('focusInput1') focusInputRef: ElementRef;
  // @ViewChildren('focusInput1, focusInput2') focusInputsRef: QueryList<ElementRef>;
  @ViewChildren(NgModel) focusInputsRef: QueryList<ElementRef>;

  ngAfterViewInit(): void{
    this.focusInputRef.nativeElement.focus();
    console.log(this.focusInputsRef)
  }
  // ----------------------End Focus code----------------------


  // ----------------------Notify the component from user changtes----------------------



  // ----------------------End Focus code----------------------

  



}

interface user{
  avatar: string;
  first_name: string;
  id: number;
  last_name: string;
}