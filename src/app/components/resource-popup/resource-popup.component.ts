import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resource-popup',
  templateUrl: './resource-popup.component.html',
  styleUrls: ['./resource-popup.component.scss']
})
export class ResourcePopupComponent implements OnInit, AfterViewInit {

  @Input("data") resource;
  @ViewChild('prometheus', { static: false }) prometheusModal;
  @ViewChild('gitlab', { static: false }) gitlabModal;
  @ViewChild('cassandra', { static: false }) cassandraModal;
  @ViewChild('minio', { static: false }) minioModal;
  @ViewChild('redis', { static: false }) redisModal;
  @ViewChild('nfs', { static: false }) nfsModal;
  @ViewChild('elasticsearch', { static: false }) elasticsearchModal;
  @ViewChild('mysql', { static: false }) mysqlModal;
  @ViewChild('postgresql', { static: false }) postgresqlModal;
  @ViewChild('percona', { static: false }) perconaModal;
  @ViewChild('nuodb', { static: false }) nuodbModal;
  @ViewChild('mongodb', { static: false }) mongodbModal;
  modalObj;
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    const modal = this.modalObj.filter(res => res.key == content)
    this.modalService.open(modal[0].value, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngAfterViewInit() {
    this.modalObj = [
      {
        key: 'prometheus',
        value: this.prometheusModal
      },
      {
        key: 'cassandra',
        value: this.cassandraModal
      },
      {
        key: 'gitlab',
        value: this.gitlabModal
      },
      {
        key: 'minio',
        value: this.minioModal
      },
      {
        key: 'redis',
        value: this.redisModal
      },
      {
        key: 'nfs',
        value: this.nfsModal
      },
      {
        key: 'elasticsearch',
        value: this.elasticsearchModal
      },
      {
        key: 'mysql',
        value: this.mysqlModal
      },
      {
        key: 'postgresql',
        value: this.postgresqlModal
      },
      {
        key: 'percona',
        value: this.perconaModal
      },
      {
        key: 'nuodb',
        value: this.nuodbModal
      },
      {
        key: 'mongodb',
        value: this.mongodbModal
      }
    ];
  }

}
