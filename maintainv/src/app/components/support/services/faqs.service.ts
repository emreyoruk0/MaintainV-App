import { Injectable } from '@angular/core';
import { FAQModel } from '../models/faq.model';
import { TopicModel } from '../models/topic.model';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {
  topics: TopicModel[] = [
    { topic: 'All' },
    { topic: 'Dashboard' },
    { topic: 'Work Order' },
    { topic: 'Periodic Maintanence' },
    { topic: 'Asset' },
    { topic: 'Vendors and Customers' },
    { topic: 'Location' },
    { topic: 'Part' },
    { topic: 'Check List' },
    { topic: 'Profile' },
    { topic: 'Notification' },
    { topic: 'Scan' }
  ];

  questions: FAQModel[] = [
    {
      topic: 'Dashboard',
      question: 'What is the use of the periodic maintenance targets report on the dashboard?',
      answer: 'Provides access to summary information about periodic maintenance'
    },
    {
      topic: 'Dashboard',
      question: 'What is the use of the MTBF report on the dashboard?',
      answer: 'MTBF measures the time it takes a device from one failure to the next failure. This gives the idea that the equipment can continue to operate for a certain period of time between unplanned failures. It allows you to prepare for unexpected situations.'
    },
    {
      topic: 'Dashboard',
      question: 'What is the use of the MTTR report on the dashboard?',
      answer: 'Average repair time measurements are a metric system that indicates the time period that should be allocated for the elimination of unplanned malfunctions that cause interruptions in production.'
    },
    {
      topic: 'Scan',
      question: 'How can scanning be done?',
      answer: "Click on the 'Scan' option to log in to the Maintenance application from your mobile device."
    },
    {
      topic: 'Notification',
      question: 'How can I create a notification ?',
      answer: "Notifications are automatically generated by the application. When a work order is created or a maintenance assignment is made, a notification is sent to the relevant responsible people."
    },
    {
      topic: 'Profile',
      question: 'How can user information in the profile be edited?',
      answer: "When you click on the user image in the top right in the navbar, the dropdown opens, and when you click on the user profile, the edit form opens. Here the user can update the information or remove his account."
    },
    {
      topic: 'Profile',
      question: 'How can I create a profile?',
      answer: "When the website is first opened, the login page will appear. If you do not have an account, you can create a profile by clicking the 'Sign Up' button under the login button and entering the necessary information."
    },
    {
      topic: 'Check List',
      question: 'How can the check list details linked to the check list be viewed?',
      answer: "When you go to the detail form of the relevant Check List record, click on the 'Check List Detail' button. Here you will view the linked detail list."
    },
    {
      topic: 'Check List',
      question: 'What does the checklist do?',
      answer: "Check List is used to define and assign action items that need to be performed in a work order or maintenance record."
    },
    {
      topic: 'Check List',
      question: 'How can a checklist be created?',
      answer: "You can create a new check list entry by clicking the 'Add Check List' button in the Check List list and selecting the option."
    },
    {
      topic: 'Part',
      question: 'How can work orders linked to parts be displayed?',
      answer: "After the parts list is entered into the relevant section's form, the 'Work Orders' list is clicked and the work order list can be viewed on the page that opens."
    },
    {
      topic: 'Part',
      question: 'How can assets linked to parts be displayed?',
      answer: "After entering the relevant part form page in the part list, click on the 'Assets' list and the asset list can be viewed on the page that opens."
    },
    {
      topic: 'Part',
      question: 'How to create random barcode in parts?',
      answer: "When creating a random barcode, the barcode type is selected and the system generates the barcode by clicking the 'random barcode' button."
    },
    {
      topic: 'Part',
      question: 'What does the random barcode in parts do?',
      answer: "It allows automatic barcode assignment by the system if a specific barcode is not defined for the part when creating a part record."
    },
    {
      topic: 'Part',
      question: 'What is the random barcode in parts?',
      answer: "It is a type of barcode that the system creates by generating random values."
    },
    {
      topic: 'Part',
      question: 'How to create custom barcode in parts?',
      answer: "When creating a custom barcode, the barcode type is selected and the barcode values ​to be created are entered manually."
    },
    {
      topic: 'Part',
      question: 'What does the custom barcode in parts do?',
      answer: "When creating a part record, if a special barcode will be defined for the part, custom barcode is used."
    },
    {
      topic: 'Part',
      question: 'What is the custom barcode in parts?',
      answer: "It is a special type of barcode in which the user can enter values ​​manually upon request."
    },
    {
      topic: 'Part',
      question: 'How can I create parts?',
      answer: "You can create a new part record by clicking the 'Add Part' button on the home page or in the part list."
    },
    {
      topic: 'Vendors and Customers',
      question: 'How can Vendors & Customer create?',
      answer: "When you click on the 'Add Vendors&Customer' button in the Vendor & Customer list, the form that opens is created by selecting the vendor or customer."
    },
    {
      topic: 'Location',
      question: 'How can location related periodic maintanence be viewed?',
      answer: "After entering the form page of the relevant region with the location list, the 'Periodic Maintanence' file is clicked and the periodic maintanence list can be viewed on the page that opens."
    },
    {
      topic: 'Location',
      question: 'How can location related parts be viewed?',
      answer: "After entering the form page of the relevant region with the location list, the 'Part' file is clicked and the part list can be viewed on the page that opens."
    },
    {
      topic: 'Location',
      question: 'How can location related assets be viewed?',
      answer: "After entering the form page of the relevant region with the location list, the 'Asset' file is clicked and the asset list can be viewed on the page that opens."
    },
    {
      topic: 'Location',
      question: 'How can location related work orders be viewed?',
      answer: "After entering the form page of the relevant location in the location list, click on the 'Work Orders' list and the work order list can be viewed on the page that opens."
    },
    {
      topic: 'Location',
      question: 'How can location be created?',
      answer: "You can create a new location record by clicking the 'Add Location' button on the home page or in the location list."
    },
    {
      topic: 'Asset',
      question: 'What does the status in the asset do?',
      answer: "Assets have three statuses. These indicate the asset's planned, held and not held states."
    },
    {
      topic: 'Asset',
      question: 'How to create random barcode?',
      answer: "When creating a random barcode, the barcode type is selected and the system generates the barcode by clicking the 'random barcode' button."
    },
    {
      topic: 'Asset',
      question: 'What is a random barcode?',
      answer: "It is a type of barcode that the system creates by generating random values."
    },
    {
      topic: 'Asset',
      question: 'How to create custom barcode?',
      answer: "When creating a custom barcode, the barcode type is selected and the barcode values ​​to be created are entered manually."
    },
    {
      topic: 'Asset',
      question: 'What is a custom barcode?',
      answer: "It is a special type of barcode in which the user can enter values ​​manually upon request."
    },
    {
      topic: 'Asset',
      question: 'How to create a category in the asset?',
      answer: "Asset categories can be added manually."
    },
    {
      topic: 'Asset',
      question: 'How to create model in asset?',
      answer: "The model can be added manually."
    },
    {
      topic: 'Asset',
      question: 'How is asset created?',
      answer: "You can create a new asset record by clicking the + button in the asset list and selecting the 'Add Asset' option."
    },
    {
      topic: 'Periodic Maintanence',
      question: 'How to multiply periodic maintanence ?',
      answer: "Click on the edit button in the list and select the duplicate option."
    },
    {
      topic: 'Periodic Maintanence',
      question: 'How to delete periodic maintanence ?',
      answer: "Click on the edit button in the list and select the delete option."
    },
    {
      topic: 'Periodic Maintanence',
      question: 'How to add asset in the periodic maintanence ?',
      answer: "Asset assignment can be made for periodic maintenance by selecting the relevant asset from the asset information section."
    },
    {
      topic: 'Periodic Maintanence',
      question: 'How to add a checklist to periodic maintenance?',
      answer: "A new check list can be added from the check list section or a selection can be made from existing records."
    },
    {
      topic: 'Periodic Maintanence',
      question: 'How is period assignment done in periodic maintenance?',
      answer: "Assignment can be made by determining the relevant period in the Work orders due section."
    },
    {
      topic: 'Periodic Maintanence',
      question: 'How to create periodic maintenance?',
      answer: "You can create a new periodic maintanence record by clicking the 'Add Periodic Maintanence' button on the home page or in the periodic maintanence list."
    },
    {
      topic: 'Work Order',
      question: 'What is the use of calendar view from work order?',
      answer: "It is used to track work orders and their status on a date basis."
    },
    {
      topic: 'Work Order',
      question: 'How to switch from work order to calendar view?',
      answer: "You can switch to the calendar view from the calendar icon next to search in the upper right corner of the work order list."
    },
    {
      topic: 'Work Order',
      question: 'How to copy the opened work order?',
      answer: "Click on the edit button in the list and select the duplicate option."
    },
    {
      topic: 'Work Order',
      question: 'How to delete an opened work order?',
      answer: "Click on the edit button in the list and select the delete option."
    },
    {
      topic: 'Work Order',
      question: 'How can a closed work order be processed back?',
      answer: "Processing can be done again by re-opening the work order status."
    },
    {
      topic: 'Work Order',
      question: 'How can a work order be closed?',
      answer: "The work order detail is displayed and the completed option is selected in the status section."
    },
    {
      topic: 'Work Order',
      question: 'How can a work order be put on hold?',
      answer: "The work order can be put on hold by setting the work order status to on hold."
    },
    {
      topic: 'Work Order',
      question: 'How to start a work order?',
      answer: "The work order can be started by setting the status of the created work order to in progress."
    },
    {
      topic: 'Work Order',
      question: 'How to add to asset work orders ?',
      answer: "Assets can be assigned to the work order by selecting from the asset field."
    },
    {
      topic: 'Work Order',
      question: 'How does the signature option work?',
      answer: "If the signature section on the work order is selected as yes, that work order cannot be closed without entering the signature."
    },
    {
      topic: 'Work Order',
      question: 'How to add check-list ?',
      answer: "A new definition can be made from the check list section or a selection can be made from existing check lists."
    },
    {
      topic: 'Work Order',
      question: 'How can I create a work order through the mobile application?',
      answer: "You can create a new work order record by clicking the + button on the main page or in the work order list and selecting the 'Add Work Order' option."
    }
  ];
}
