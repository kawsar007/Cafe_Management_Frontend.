import { Injectable } from "@angular/core";

export interface Menu {
    state: string,
    name: string,
    icon: string,
    role: string
}

const MENUITEMS = [
    {state: 'dashboard',name:'Dashboard',icon:'dashboard',role:''},
    {state: 'category',name:'Manage Category',icon:'category',role:'admin'},
    // {state: 'category',name:'Category',icon: 'category',role:''},
    // {state: 'bill',name:'Bill',icon: 'bill',role:''},
];

@Injectable()
export class MenuItems{
    getMenuitem(): Menu[]{
        return MENUITEMS;
    }
}