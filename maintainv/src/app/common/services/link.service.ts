import { Injectable } from '@angular/core';
import { LinkModel } from '../models/link.model';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  industryLinks: LinkModel[] = [
    {linkUrl: 'manufacturing', linkText: 'Manufacturing'},
    {linkUrl: 'energy', linkText: 'Energy'},
    {linkUrl: 'education', linkText: 'Education'},
    {linkUrl: 'government-organizations', linkText: 'Government Organizations'},
    {linkUrl: 'healthcare', linkText: 'Healthcare'},
    {linkUrl: 'hospitality', linkText: 'Hospitality'},
    {linkUrl: 'recreation', linkText: 'Recreation'},
    {linkUrl: 'transportation', linkText: 'Transportation'},
    {linkUrl: 'property-management', linkText: 'Property Management'},
    {linkUrl: 'aerospace', linkText: 'Aerospace'},
  ];

  sourceLinks: LinkModel[] = [
    {linkUrl: 'blog', linkText: 'Blog'},
    {linkUrl: 'roi-calculator', linkText: 'ROI Calculator'},
    {linkUrl: 'learning-center', linkText: 'Learning Center'},
    {linkUrl: 'support', linkText: 'Support'},
  ]

  constructor() { }
}
