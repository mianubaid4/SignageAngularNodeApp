import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  fontSize = [
    { name: '12px', code: 'font-size:12px;' },
    { name: '13px', code: 'font-size:13px;' },
    { name: '14px', code: 'font-size:14px;' },
    { name: '15px', code: 'font-size:15px;' },
    { name: '16px', code: 'font-size:16px;' },
    { name: '17px', code: 'font-size:17px;' },
    { name: '18px', code: 'font-size:18px;' },
    { name: '19px', code: 'font-size:19px;' },
    { name: '20px', code: 'font-size:20px;' },
    { name: '22px', code: 'font-size:22px;' },
    { name: '24px', code: 'font-size:24px;' },
    { name: '26px', code: 'font-size:26px;' },
    { name: '28px', code: 'font-size:28px;' },
    { name: '34px', code: 'font-size:36px;' },
    { name: '48px', code: 'font-size:48px;' },
    { name: '72px', code: 'font-size:72px;' },

  ]

  fonts = [
    { name: 'Arial, sans-serif', code: 'font-family:Arial,sans-serif;' },
    { name: 'Verdana, sans-serif', code: 'font-family:Verdana,sans-serif;' },
    { name: 'Tahoma, sans-serif', code: 'font-family:Tahoma,sans-serif;' },
    { name: 'Times New Roman, serif', code: 'font-family:Times New Roman,serif;' },
    { name: 'Georgia, serif', code: 'font-family:Georgia,sans-serif;' },
    { name: 'Garamond, sans-serif', code: 'font-family:Garamond,serif;' },
    { name: 'Courier New, monospace', code: 'font-family:Courier New,monospace;' },
    { name: 'Brush Script MT, cursive', code: 'font-family:Brush Script MT,cursive;' },



  ]

  headings = [
    { name: 'Add Heading', code: 'font-size:16px;' },
    { name: 'Add SubHeading', code: 'font-size:14px;' },
    { name: 'Add Paragraph', code: 'font-size:12px;' },




  ]

}
