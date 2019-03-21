import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  
  messageFrom: FormGroup; 
  submitted: boolean;
  success: boolean;
  imgSrc: any;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {

    this.messageFrom = this.fb.group({
      file: [null, Validators.required]
    });
  }
  
  onFileChange(event) {
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.messageFrom.patchValue({
          file: reader.result
       });      
       this.imgSrc = reader.result;
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  onSubmit(){
    this.submitted = true;
    if(this.messageFrom.invalid){
      return;
    }
    this.success = true;
    console.log(this.messageFrom)
  }

  ngOnInit() {
  }
  

}
