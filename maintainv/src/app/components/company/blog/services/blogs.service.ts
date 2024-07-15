import { Injectable } from '@angular/core';
import { BlogModel } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  blogs: BlogModel[] = [
    {
      url: 'work-order-management',
      title: 'Work Order Management',
      content: 'Work orders help a company monitor and manage its maintenance work.'
    },
    {
      url: 'managing-work-orders',
      title: 'Managing Work Orders',
      content: 'Here are a few benefits to consider when exploring strategies to effectively manage and organize work orders:'
    },
    {
      url: 'using-cmms',
      title: 'Using a CMMS',
      content: 'CMMS is a comprehensive system for managing work orders that automates the entire maintenance process.'
    },
    {
      url: 'benefits-cmms',
      title: 'Key Functions and Benefits of CMMS',
      content: 'CMMS (Computerized Maintenance Management System) is a computer-based system for maintenance management. The main functions and benefits of CMMS are:'
    },
    {
      url: 'cmms-selection',
      title: 'CMMS Selection and Application',
      content: 'CMMS (Computerized Maintenance Management System) selection and implementation is a critical process for organizations and it is important to manage it correctly. Here are the important steps in CMMS selection and implementation:'
    },
    {
      url: 'maintenance-strategies',
      title: 'Maintenance Strategies and Best Practices',
      content: "Maintenance strategies and best practices are important methods used to improve the reliability and efficiency of an organization's assets. Here are some basics about maintenance strategies and best practices:"
    },
    {
      url: 'current-cmms-trends',
      title: 'Current CMMS Trends and Technologies',
      content: 'There are a number of trends and technologies that are constantly evolving and changing in the field of CMMS (Computerized Maintenance Management System). Here are the current CMMS trends and technologies:'
    },
    {
      url: 'cmms-usage-tips',
      title: 'CMMS Usage Tips and Tricks',
      content: 'The following tips and tricks can be taken into consideration to increase efficiency and manage successfully when using CMMS (Computerized Maintenance Management System):'
    },
    {
      url: 'cmms-industry',
      title: 'CMMS Industry 4.0',
      content: 'CMMS (Computerized Maintenance Management System) is one of the key components of Industry 4.0 and can help successfully implement this new industrial transformation.'
    }
  ]

  constructor() {

  }
}
