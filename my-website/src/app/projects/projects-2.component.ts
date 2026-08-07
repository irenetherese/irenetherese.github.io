import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-2',
  templateUrl: './projects-2.component.html',
  styleUrl: './projects-2.component.scss'
})
export class Projects2Component {
  projects = [
    {
      title: "QR Code Generator",
      repository: "https://github.com/irenetherese/qr-code-generator",
      link: "https://irenetherese.github.io/qr-code-generator/"
    }
  ];

  constructor() { }
  navigateToProject(link: string) {
    window.open(link, '_blank');
  }
}
