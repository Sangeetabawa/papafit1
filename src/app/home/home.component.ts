import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Contact} from '@angular-material-extensions/contacts';

const CONTACT_DATA: Contact[] = [
  {
    id: 'RnCSW7Y88iTx',
    name: 'Anthony Nahas',
    email: 'anthony.na@your_domain.com',
    photoURL: 'assets/profiles/17p60.png',
    phoneNumber: '+1-202-555-0169'
  },
  {
    id: 'KXgJviXd4EL9',
    name: 'Amanda Lee',
    email: 'amanda.lee@@angular-material-extensions/contacts.de',
    photoURL: 'assets/profiles/1p60.png',
    phoneNumber: '+1-502-555-0156'
  },
  {
    id: 'RDcYEtcgqHGq',
    name: 'Sophie Cameron',
    email: 'sophie.cameron@@angular-material-extensions/contacts.de',
    photoURL: 'assets/profiles/3p60.png',
    phoneNumber: '775-555-0140'
  },
  {
    id: '3i3buidLomLJ',
    name: 'Alan Nash',
    email: 'alan.nash@ngx-auth-firebaseui.com',
    photoURL: 'assets/profiles/2p60.png',
    phoneNumber: '+1-202-555-0185'
  },
  
  {
    id: 'kHllPD1fK0EU',
    name: 'Keith\tPeters',
    email: 'keith.peters@@angular-material-extensions/contacts.de',
    photoURL: 'assets/profiles/16p60.png',
    phoneNumber: '+1-302-555-0197'
  },
  {
    id: 'ay2FfcrgthjU',
    name: 'Molly\tRampling',
    email: 'molly.rampling@@angular-material-extensions/contacts.de',
    photoURL: 'assets/profiles/8p60.png',
    phoneNumber: '+1-302-555-0120'
  },
  {
    id: 'PTBQDMszoEFy',
    name: 'Adam\tRussell',
    email: 'adam.russell@@angular-material-extensions/contacts.de',
    photoURL: 'assets/profiles/14p60.png',
    phoneNumber: '+1-202-555-0163'
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  contacts = CONTACT_DATA;

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | @angular-material-extensions/contacts');
    console.log('x', this.contacts);
    setTimeout(() => {
      this.addContact({name: 'asd', email: 'asdasd',phoneNumber: '2222'});
      console.log('ahahha added new contact');
    }, 5000);
  }

  addContact(contact: Contact) {
    console.log('on new contact: ', contact);
    // do whatever you want with the added contact
  }

  removeContact(contact: Contact) {
    console.log('on removed contact: ', contact);
    // do whatever you want with the deleted contact
  }

}

