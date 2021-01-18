import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service'

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService]
})
export class EmpInfoComponent implements OnInit {

  // Example Array [Name, id, email]
  infoReceived: string[] = []

  getInfoFromService(){
    this.infoReceived = this.recordService.getinfo()
  }

  constructor(private recordService: RecordsService) { }

  ngOnInit(): void {
  }

}
