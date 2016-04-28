/// <reference path="../typings/main/ambient/jasmine/index.d.ts"/>
import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {UserService} from "./user-service";
 
describe('UserService Tests', () => {
    let service:UserService = new UserService();
 
    it('Should return unconnected/false', () => {
        var connected = service.isConnected();
        expect(connected).toEqual(false);
    });

    it('Should return connected/true', () => {
	service.connect('a_token', 'a_login', 1);
        var connected = service.isConnected();
        expect(connected).toEqual(true);
    });

    it('Should return same token and login', () => {
	var atoken = 'a_token';
	var alogin = 'a_login';
	service.connect(atoken, alogin, 1);
	var thetoken = service.getToken();
	expect(thetoken).toEqual(atoken);
	var thelogin = service.getLogin();
	expect(thelogin).toEqual(alogin);
    });
 
    it('Should return unconnected/false after disconnect', () => {
	var atoken = 'a_token';
	var alogin = 'a_login';
	service.connect(atoken, alogin, 1);
	service.disconnect();
        var connected = service.isConnected();
        expect(connected).toEqual(false);
    });

    it('Should return null login and token after disconnect', () => {
	var atoken = 'a_token';
	var alogin = 'a_login';
	service.connect(atoken, alogin, 1);
	service.disconnect();
	var thelogin = service.getLogin();
        expect(thelogin).toEqual(null);
	var thetoken = service.getToken();
        expect(thetoken).toEqual(null);
    });

});
