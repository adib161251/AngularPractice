import { CourseService } from './courses.service';
import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    templateUrl:'./course.component.html'
            
})
export class CourseComponent{

    text = 'সূচনা: গরু একটি গৃহপালিত পশু। গৃহস্থালির কাজে গরু একটি গুরুত্বপূর্ণ প্রাণী। গরু আমাদের নানা উপকারে আসে এবং তার দ্বারা অনেক কাজ সাধন করা হয়। প্রাণী হিসেবে গরু একটি শান্তশিষ্ট এবং নিরীহ প্রাণী। আকার ও আকৃতি: গরু একটি চার পা ওয়ালা প্রাণী। উচ্চতায় এটি তিন চার হাত এবং দৈর্ঘ্য পাঁচ ছয় হাত হয়ে থাকে। গরুর দুই চোখ, দুই কান, দুই শিং,একটি দীর্ঘ মাথা এবং পিছনে একটি লেজ থাকে। গরুর সারা শরীর ছোট এবং ঘন লোমে আবৃত থাকে। গরু লাল,কালো, সাদা ইত্যাদি বিভিন্ন রঙের হয়ে থাকে এবং বিশ্বের সবজায়গায় পাওয়া যায়। খাদ্য: গরু একটি তৃণভোজী প্রাণী। ঘাস খড় গাছের পাতা গরুর প্রধান খাদ্য। তাছাড়াও ভাতের ফ্যান শুকনো দানা জাতীয় খাবার খেয়ে থাকে। উপকারিতা: আমাদের জীবনে গরুর উপকারিতা অসীম। গরুর দুধ অত্যন্ত সুস্বাদু এবং পুষ্টিকর। এই দুধ থেকে দই ছানা মাখন কি ইত্যাদি নানারকম দ্রব্য তৈরি করা হয় যেগুলি স্বাস্থ্যের জন্য খুবই উপকারী।আমরা আমাদের জমি চাষ করতে ষাঁড় বা বলদ ব্যবহার করে থাকি।পণ্য পরিবহনের জন্য গরুর গাড়িও ব্যবহৃত হয়। তাছাড়াও কৃষি ক্ষেত্রে গরুর গোবর একটি উত্তম সার হিসাবে ব্যবহার করা হয়। উপসংহার: গরু নানা গুণ থাকা সত্ত্বেও গরুর প্রতি আমরা যত্নশীল নই। গরুর উপকারিতার দিকে চেয়ে আমাদের সবাইকে গরুর প্রতি সদয় হওয়া দরকার।গরু পালনে আমাদেরকে উৎসাহিত হওয়া দরকার তাহলে নানাভাবে উপকৃত হওয়ার সঙ্গে সঙ্গে আর্থিকভাবে লাভবান হতে পারব।';
    course ={
        title : "Angular Project",
        rating : 4.2564,
        students: 30452,
        releaseDate: new Date()
    }
    title = "List of Courses"; 
    isActive = true;
    courses : string[];
    valuee = "me@example.com";
    constructor(service:CourseService)
    {
        this.courses = service.getCourses();
    }
    enter(email){
        alert("Enter was pressed "+ email);
        console.log(email);
    }
    onKeyup($event){
        if($event.keyCode === 13){
            console.log($event);
            alert("Enter was pressed");

        } 
    }
    onClick($event){
        $event.stopPropagation();
        console.log($event);
        alert("Button was Clicked");
    }
    
    twowayBinding()
    {
        console.log("2 way binding "+ this.valuee);
    }

    loop(){
      return this.title
    }
    

   // courses;
}