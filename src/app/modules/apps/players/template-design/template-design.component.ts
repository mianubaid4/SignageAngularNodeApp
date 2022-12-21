import * as htmlToImage from "html-to-image";
import { ChangeDetectorRef, Component, HostListener, OnInit } from "@angular/core";
import { GlobalService } from "src/app/global.service";



@Component({
  selector: 'app-template-design',
  templateUrl: './template-design.component.html',
  styleUrls: ['./template-design.component.scss'],
})
export class TemplateDesignComponent implements OnInit {
  TemplateOne: any[] = [
    {
      data: '/assets/images/tem-1-image-1.jpg',
      
      type: 'image',
      cols: 1,
      rows: 1,
      style: 'height:300px',
    },
    {
      data: '<p><br></p><p><span style="color: rgb(255, 255, 255);">LETs</span></p><h2><span style="color: rgb(255, 255, 255);">CONNECT</span></h2><p><br></p><p><span style="color: rgb(255, 255, 255);">Phone</span></p><p><span style="color: rgb(255, 255, 255);">123-456-7890</span></p><p><br></p><p><span style="color: rgb(255, 255, 255);">Website</span></p><p><span style="color: rgb(255, 255, 255);">www.reallygreatsite.com</span></p><p><br></p><p><span style="color: rgb(255, 255, 255);">Email</span></p><p><span style="color: rgb(255, 255, 255);">hello@reallygreatsite.com</span></p>',
      cols: 1.5,
      rows: 1,
      type: 'text',
      style: '',
    },
    {
      data: '/assets/images/tem-1-image-2.jpg',
      cols: 1,
      rows: 1,
      type: 'image',
      style: 'height:300px',
    },
    {
      data: '<h1><span style="color: rgb(255, 255, 255);" class="ql-font-monospace"> ABOUT</span></h1><h2><span style="color: rgb(255, 255, 255);" class="ql-font-monospace"> OUR COMPANY</span></h2><p><br></p><p><span style="color: rgb(255, 255, 255);" class="ql-font-monospace"> Booklets are printed materials containing details about a business, event, product, promotion, etc. They are also     known as catalogs or pamphlets.</span></p>',
      type: 'text',
      cols: 1,
      rows: 1,
      style: 'margin-top:-100px',
    },
    {
      data: '/assets/images/tem-1-image-3.jpg',
      type: 'image',
      cols: 2,
      rows: 1,
      style: 'width:300px;height:200px;margin-top: 50px',
    },
    {
      data: '<p><span style="color: rgb(255, 255, 255);">www.reallygreatsite.com</span></p><p><span style="color: rgb(106, 153, 85);"><span class="ql-cursor">﻿</span></span></p><h2><span style="color: rgb(255, 255, 255);">MINIMALIST</span></h2><h1><span style="color: rgb(255, 255, 255);">REAL </span></h1><h1><span style="color: rgb(255, 255, 255);">ESTATE</span></h1>',
      cols: 1,
      rows: 1,
      type: 'text',
      style: '',
    },
  ];

  TemplateTwo: any[] = [
    {
      data: '/assets/images/tem-1-image-1.jpg',
      type: 'image',
      cols: 2,
      rows: 1,
      style: '',
    },
    {
      data: '<p><br></p><p><span style="color: rgb(255, 255, 255);">LETs</span></p><h2><span style="color: rgb(255, 255, 255);">CONNECT</span></h2><p><br></p><p><span style="color: rgb(255, 255, 255);">Phone</span></p><p><span style="color: rgb(255, 255, 255);">123-456-7890</span></p><p><br></p><p><span style="color: rgb(255, 255, 255);">Website</span></p><p><span style="color: rgb(255, 255, 255);">www.reallygreatsite.com</span></p><p><br></p><p><span style="color: rgb(255, 255, 255);">Email</span></p><p><span style="color: rgb(255, 255, 255);">hello@reallygreatsite.com</span></p>',
      cols: 2,
      rows: 1,
      type: 'text',
      style: '',
    },
    {
      data: '/assets/images/tem-1-image-2.jpg',
      cols: 2,
      rows: 1,
      type: 'image',
      style: '',
    },
    // { data: '<h1><span style=\"color: rgb(255, 255, 255);\" class=\"ql-font-monospace\"> ABOUT</span></h1><h2><span style=\"color: rgb(255, 255, 255);\" class=\"ql-font-monospace\"> OUR COMPANY</span></h2><p><br></p><p><span style=\"color: rgb(255, 255, 255);\" class=\"ql-font-monospace\"> Booklets are printed materials containing details about a business, event, product, promotion, etc. They are also     known as catalogs or pamphlets.</span></p>', type: 'text',  cols: 1, rows: 1, 'style': 'margin-top:-100px'},
    {
      data: '/assets/images/tem-1-image-3.jpg',
      type: 'image',
      cols: 2,
      rows: 1,
      style: 'margin-top: 50px',
    },
    // {data: '<p><span style=\"color: rgb(255, 255, 255);\">www.reallygreatsite.com</span></p><p><span style=\"color: rgb(106, 153, 85);\"><span class=\"ql-cursor\">﻿</span></span></p><h2><span style=\"color: rgb(255, 255, 255);\">MINIMALIST</span></h2><h1><span style=\"color: rgb(255, 255, 255);\">REAL </span></h1><h1><span style=\"color: rgb(255, 255, 255);\">ESTATE</span></h1>', cols: 1, rows: 1, 'type': 'text', 'style': '', },
  ];

  TemplateThree: any[] = [
    {
      data: '/assets/images/tem-1-image-2.jpg',
      cols: 1,
      rows: 1,
      type: 'image',
      style: '',
    },
    {
      data: '<p><span style="color: rgb(230, 0, 0);">\t  </span>\t<span style="color: rgb(230, 0, 0);">                          </span><strong style="color: rgb(230, 0, 0);">Just letting you know</strong><span style="color: rgb(230, 0, 0);">\t</span></p><h1><strong style="color: rgb(230, 0, 0);">    The Stewarts have moved!</strong></h1>    ',
      type: 'text',
      cols: 1,
      rows: 1,
      style: '',
    },
    {
      data: '/assets/images/tem-1-image-2.jpg',
      cols: 1,
      rows: 1,
      type: 'image',
      style: '',
    },
    {
      data: '/assets/images/tem-1-image-2.jpg',
      type: 'image',
      cols: 1,
      rows: 1,
      style: '',
    },
    {
      data: '<h2><span style="color: rgb(255, 255, 255);">Our new address:</span></h2><h2><span style="color: rgb(255, 255, 255);">123 Anywhere St., Any City</span></h2><h2><span style="color: rgb(255, 255, 255);">State, Country 12345</span></h2><h2><span style="color: rgb(255, 255, 255);">Visit us soon!</span></h2>',
      type: 'text',
      cols: 1,
      rows: 1,
      style: '',
    },
    {
      data: '/assets/images/tem-1-image-2.jpg',
      cols: 1,
      rows: 1,
      type: 'image',
      style: '',
    },
  ];

  TemplateFour: any[] = [
    {
      data: '/assets/images/temfourpicfive.png',
      cols: 1,
      rows: 1,
      type: 'image',
      style: '',
    },
    {
      data: '/assets/images/temfourpicone.png',
      cols: 1,
      rows: 1,
      type: 'image',
      style: '',
    },
    {
      data: '/assets/images/temfourpiceigth.png',
      cols: 1,
      rows: 1,
      type: 'both',
      text: '<p><strong style="color: rgb(255, 255, 255);">LIMMOBILIERE</strong></p><h1><span style="color: rgb(255, 255, 0);">W</span><span style="color: rgb(255, 255, 255);">OLFS</span></h1><p><br></p>',
      style: '',
    },
    {
      data: '/assets/images/temfourpictwo.png',
      cols: 1,
      rows: 1,
      type: 'image',
      style: '',
    },

    {
      data: '/assets/images/temfourpicthree.png',
      cols: 1,
      rows: 1,
      type: 'image',
      style: '',
    },

    {
      data: '<p><strong>395.00</strong></p><h1><span style="color: rgb(0, 102, 204);">VILLA</span></h1><h1><span style="color: rgb(0, 102, 204);">HACCOURT</span></h1><p><strong style="color: rgb(102, 163, 224);">3CH | 2SDB | 1500 M2</strong></p>',
      type: 'text',
      cols: 2,
      rows: 1,
      style: '',
    },
    {
      data: '/assets/images/temfourpicfour.png',
      cols: 1,
      rows: 1,
      type: 'image',
      style: '',
    },

    {
      data: '/assets/images/temfourpicsix.png',
      type: 'image',
      cols: 1,
      rows: 1,
      style: '',
    },
    {
      data: '/assets/images/temfourpicseven.png',
      cols: 1,
      rows: 1,
      type: 'image',
      style: '',
    },
    {
      data: '/assets/images/temfourpiceigth.png',
      cols: 1,
      rows: 1,
      type: 'image',
      style: '',
    },
    {
      data: '/assets/images/temfourpicnine.png',
      cols: 1,
      rows: 1,
      type: 'image',
      style: '',
    },
  ];

  TemplateFive: any[] = [
    {
      data: '/assets/images/5-50183_pc-flower-garden-wallpapers-sherwood-sanderlin-p.jpg',
      type: 'image',
      cols: 2,
      rows: 2,
      style: '',
      gridStyle: '',
    },
    {
      data: '/assets/images/seaview.jpg',
      cols: 2,
      rows: 3,
      type: 'image',
      style: '',
      gridStyle: '',
    },
    {
      data: '/assets/images/landscapes flowers garden.jpg',
      type: 'image',
      cols: 2,
      rows: 2,
      style: '',
      gridStyle: '',
    },

    {
      data: '/assets/images/yellow-flowers.jpg',
      type: 'image',
      cols: 2,
      rows: 2,
      style: '',
      gridStyle: '',
    },
    {
      data: '/assets/images/Flower-HD-Wallpaper-Free-download.jpg',
      type: 'image',
      cols: 2,
      rows: 2,
      style: '',
      gridStyle: '',
    },

    {
      data: '/assets/images/Colorful-Garden-Flowers-hd-free-wallpapers.jpg',
      type: 'image',
      cols: 2,
      rows: 3,
      style: '',
      gridStyle: '',
    },
    {
      data: '/assets/images/water-lilies-leaves-pond-water-wallpaper-preview.jpg',
      type: 'image',
      cols: 2,
      rows: 2,
      style: '',
      gridStyle: '',
    },
    {
      data: '/assets/images/pond_with_beautiful_pink_lotus_flowers_4k_5k_hd_flowers-5120x2880.jpg',
      cols: 2,
      rows: 2,
      type: 'image',
      style: '',
      gridStyle: '',
    },
  ];

  TemplateSix: any[] = [
    {
      data: '/assets/images/Real Estate 4.jpeg',
      type: 'image',
      cols: 1,
      rows: 3,
      style: '',
      gridStyle: '',
    },
    {
      data: '/assets/images/Real Estate 1.jpeg',
      cols: 1,
      rows: 1,
      type: 'image',
      style: '',
      gridStyle: '',
    },
    {
      data: '/assets/images/Real Estate 2.jpeg',
      type: 'image',
      cols: 1,
      rows: 1,
      style: '',
      gridStyle: '',
    },
    {
      data: '/assets/images/Real Estate 5.jpeg',
      type: 'image',
      cols: 1,
      rows: 1,
      style: '',
      gridStyle: '',
    },
  ];

  bgcolor = 'lightblue';
  heigthOfRow = '250px';
  pictures: any[] = [];
  droped: any = [];
  activeSection: String = 'Templates';
  spaces = '5px';
  defaultColor: string = '#1976D2';
  openEditor: boolean = false;
  EditorData: string = '';
  showSpaces: number = 0;
  dragedPic: string = '';
  columns: any;
  endIndex: any;
  spaceValue: string = '';
  inputIndex: any;
  imageIndex: any;
  canvasBackGroundColor: string = 'background-color:#fff;';
  gridCol: string = '3';
layoutHeightWidht:String=' width:800px;height:500px;'
  layoutType: string='landscape';
  constructor(public global: GlobalService, private cdf: ChangeDetectorRef) {}

  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Delete') {
      if (this.inputIndex != null) {
        if (this.droped[this.inputIndex].type == 'both') {
          if (this.droped[this.inputIndex].text != '') {
            this.droped[this.inputIndex].text = '';
          } else {
            this.droped[this.inputIndex].data = '';
          }
        } else {
          this.droped[this.inputIndex].data = '';
          this.droped[this.inputIndex].type = 'text';
        }
      } else if (this.imageIndex != null) {
        this.droped[this.imageIndex].type = 'text';
        this.droped[this.imageIndex].data =
          'Click To Edit Text or drag a picture';
      }
    }
  }

  ngOnInit(): void {
    this.seletedTemplate(1);
  }

  imagePicker(event: any) {
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.pictures.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  dragStart(e: any, c: any, i: any, type: any) {
    this.dragedPic = c;
  }

  drop(e: any, index?: any) {
    debugger;
    if (
      this.dragedPic.includes('data:image') ||
      this.dragedPic.includes('assets/images')
    ) {
      if (this.droped[index].type == 'both') {
        this.droped[index].data = this.dragedPic;
      } else {
        this.droped[index].data = this.dragedPic;
        this.droped[index].type = 'image';
      }
    }
  }

  seletedTemplate(value: any) {
    if (value == 1) {
      this.layoutHeightWidht='width:800px;height:500px;'
      this.droped = this.TemplateOne;
      this.canvasBackGroundColor = 'background-color:#628483;';
      this.gridCol = '4';
      this.spaces = '0px';
      this.heigthOfRow = '250px';
      this.showSpaces = 0;
      this.layoutType='landscape'
    } else if (value == 2) {
      this.layoutHeightWidht='width:800px;height:500px;'
      this.droped = this.TemplateTwo;
      this.canvasBackGroundColor = 'background-color:#628483;';
      this.gridCol = '4';
      this.spaces = '0px';
      this.heigthOfRow = '250px';
      this.showSpaces = 0;
      this.layoutType='landscape'
    } else if (value == 3) {
      this.layoutHeightWidht='width:800px;height:500px;'
      this.droped = this.TemplateThree;
      this.canvasBackGroundColor = 'background-color:#000000;';
      this.gridCol = '3';
      this.spaces = '10px';
      this.heigthOfRow = '250px';
      this.showSpaces = 10;
      this.layoutType='landscape'
    } else if (value == 4) {
      this.layoutHeightWidht='width:800px;height:500px;'
      this.droped = this.TemplateFour;
      this.canvasBackGroundColor = 'background-color:#ffff;';
      this.gridCol = '4';
      this.spaces = '10px';
      this.heigthOfRow = '160px';
      this.showSpaces = 10;
      this.layoutType='landscape'
    } else if (value == 5) {
      this.layoutHeightWidht='width:800px;height:500px;'
      this.droped = this.TemplateFive;
      this.canvasBackGroundColor = 'background-color:#ffff;';
      this.gridCol = '6';
      this.spaces = '5px';
      this.heigthOfRow = '80px';
      this.showSpaces = 5;
      this.layoutType='landscape'
    } else if (value == 6) {
      this.layoutHeightWidht='width:450px;height:800px;'
      this.droped = this.TemplateSix;
      this.canvasBackGroundColor = 'background-color:#ffff;';
      this.gridCol = '2';
      this.spaces = '10px';
      this.heigthOfRow = '260px';
      this.showSpaces = 15;
      this.layoutType='potrait'
    }
  }

  adjustSpace(val: any) {
    if (val == '+') {
      if (this.showSpaces == 15) {
        return;
      }
      this.showSpaces++;
      this.spaces = this.showSpaces + 'px';
    } else {
      if (this.showSpaces == 0) {
        return;
      }
      this.showSpaces--;
      this.spaces = this.showSpaces + 'px';
    }
  }

  setColor(arg: any) {
    let color = 'background-color:' + arg + ';';
    this.canvasBackGroundColor = color;
  }

  addText() {
    debugger;
    if (
      this.inputIndex != null &&
      this.droped[this.inputIndex].type == 'text' &&
      this.droped[this.inputIndex].data == ''
    ) {
      this.droped[this.inputIndex].data = 'Add Your Text Here';
    } else if (this.imageIndex != null) {
      this.droped[this.imageIndex].type = 'both';
      this.droped[this.imageIndex].text = 'Add Your Text Here';
    }
  }

  selectIndex(type: any, index?: any, content?: any) {
    debugger;
    if (type == 'text') {
      this.inputIndex = index;
      this.imageIndex = null;
      this.EditorData = content;
      this.openEditor = true;
    } else if (type == 'both') {
      if (content.includes('data:image') || content.includes('assets/images')) {
        this.imageIndex = index;
        this.inputIndex = null;
      } else {
        this.inputIndex = index;
        this.imageIndex = null;

        this.EditorData = content;
        this.openEditor = true;
      }
    } else if (type == 'image') {
      this.inputIndex = null;
      this.imageIndex = index;
    } else {
      this.inputIndex = null;
      this.imageIndex = null;
    }
  }

  editorText(event: any) {
    if (
      this.inputIndex != null &&
      this.droped[this.inputIndex].type == 'both'
    ) {
      this.droped[this.inputIndex].text = event.htmlValue;
    } else {
      this.droped[this.inputIndex].data = event.htmlValue;
    }

    console.log(event.htmlValue);
  }

  generateImage() {
    this.inputIndex = null;
    this.imageIndex = null;
    setTimeout(() => {
      var node: any = document.getElementById('image-section');
      htmlToImage
        .toPng(node)
        .then((dataUrl) => {
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
          if(this.layoutType=='landscape'){
            this.compressImage(img.src, 1920, 1080);
          }else if(this.layoutType=='potrait'){
            this.compressImage(img.src, 1080, 1920);

          }
     
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
    }, 1000);
  }

  compressImage(src: any, newX: any, newY: any) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const elem = document.createElement('canvas');
        elem.width = newX;
        elem.height = newY;
        const ctx: any = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, newX, newY);
        let data = ctx.canvas.toDataURL();

        const downloadLink = document.createElement('a');
        const fileName = 'DesignedTemplate.png';
        downloadLink.href = data;
        downloadLink.download = fileName;
        downloadLink.click();
        console.log('final url', data);
      };
      img.onerror = (error) => rej(error);
    });
  }
}
