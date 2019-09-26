import {Component} from 'angular/core';
import { IpService } from './ip.service';

@Component(
    {
        selector: 'app-ip',
        template: '<h3>{{ip}}</h3>',
        providers: [IpService]
    }
)
export class IpComponent{
    ip: String;
    constructor(private ipService: IpService){
        this.ipService.getIp()
        .then(ip => this.ip =  ip)
        .catch(err =>console.log(err));

    }
   
}