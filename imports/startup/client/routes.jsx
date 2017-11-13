import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'
 
//Layouts and Pages
import { MainLayout } from '../../ui/containers/MainLayout.jsx'
//import { Loginpage } from '../../ui/pages/login'
//import { Loginpage } from '../../ui/pages/login'
import {Register} from '../../ui/pages/Register.jsx';
import {Display} from '../../ui/pages/Display.jsx';
import {NotFound} from '../../ui/pages/NotFound.jsx';
import {Login} from '../../ui/pages/Login.jsx';
 
FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(MainLayout, {
      content: <Login />
    })
  }
})