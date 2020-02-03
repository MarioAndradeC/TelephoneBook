import { Pipe, PipeTransform } from '@angular/core';
//import { NgModule } from '@angular/core';
//import { Injectable } from '@angular/core';
///@Injectable()
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  //constructor( ngModule:NgModule,pipe:Pipe,pipeTransform: PipeTransform){}
  transform(items: any[], terms: string,column:string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      alert(" it :" + JSON.stringify(it.contact.name ));
      return it.name.toLowerCase().includes(terms);
    });
  }
}