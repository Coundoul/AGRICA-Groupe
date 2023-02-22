import { Component, Inject } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ITesteur } from 'src/app/entities/manager/manger.model';
import { AnomalieService } from 'src/app/entities/services/anomalie/anomalie.service';
import { ReleaseService } from 'src/app/entities/services/release/release.service';
import { CasService } from 'src/app/entities/services/test/cas/cas.service';
import { ScenarioService } from 'src/app/entities/services/test/scenario/scenario.service';
import { TicketService } from 'src/app/entities/services/ticket/ticket.service';
import { TesteurService } from 'src/app/entities/testeur/service/testeur.service';

@Component({
  selector: 'app-manager-dialog',
  templateUrl: './manager-dialog.component.html',
  styleUrls: ['./manager-dialog.component.scss']
})
export class ManagerDialogComponent {

  [x: string]: any;

  items!: MenuItem[];

  listTesteur!: ITesteur[];

  testeur: any;
    
  subscription!: Subscription;


  FormGroup2 = this._formBuilder.group({
    titre: [null],
    type: [null],
    testeur: new FormControl(null),
    release: [null, new FormControl(null)],
    anomalies:[null, new FormControl(null)]
  });

  FormGroup3 = this._formBuilder.group({
    resutat: [null],
    ticket: [],
  });

  FormGroup4 = this._formBuilder.group({
    scenario: [null],
    casTest: []

  });
  FormGroup5 = this._formBuilder.group({
    cloturee: [null],
    criticite: [null],
    enCours: [null],
    priorite: [null],
    statut: [null],
  });
  
  FormGroup6 = this._formBuilder.group({
    resutat: [null],
    scenario: [null]
  });
  
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, public testeurService : TesteurService, 
    public releaseService : ReleaseService, public ticketService : TicketService, public casTestService : CasService,
    public scenarioService : ScenarioService,
    public anomalieService : AnomalieService, public fb: FormBuilder,
    public router : Router, private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public editData : any,  
    private dialogRef : MatDialogRef<ManagerDialogComponent>) {}

  ngOnInit() {
    this.isLinear = true;
    this.testeurService.getAllTesteur()
      .subscribe(response => {
        this.listTesteur = response;
      });

      if(this.editData){
        this.FormGroup2.controls['titre'].setValue(this.editData.titre);
        this.FormGroup2.controls['type'].setValue(this.editData.type);
        this.FormGroup2.controls['testeur'].setValue(this.editData.testeur);

        this.FormGroup5.controls['cloturee'].setValue(this.editData.cloturee);
        this.FormGroup5.controls['criticite'].setValue(this.editData.criticite);
        this.FormGroup5.controls['enCours'].setValue(this.editData.enCours);
        this.FormGroup5.controls['priorite'].setValue(this.editData.priorite);
        this.FormGroup5.controls['statut'].setValue(this.editData.statut);

      }
      this.testeurService.getAllTesteur()
      .subscribe({
        next:(value) =>{
            this.listTesteur=value;
        },
      })
    }
    // if(this.id){
    //   this.actionBtn="Modifier";
    //   this.FormGroup1.controls['releaseNumRelease'].setValue(this.editData.releaseNumRelease);
    //   this.FormGroup1.controls['releaseDateLivraison'].setValue(this.editData.releaseDateLivraison);
    //   this.FormGroup1.controls['releaseDatePrevision'].setValue(this.editData.releaseDatePrevision);
    //   this.FormGroup1.controls['releaseDateReelle'].setValue(this.editData.releaseDateReelle);

    //   this.FormGroup2.controls['ticketRefTicket'].setValue(this.editData.ticketRefTicket);
    //   this.FormGroup2.controls['ticketTitreTicket'].setValue(this.editData.ticketTitreTicket);
    //   this.FormGroup2.controls['ticketType'].setValue(this.editData.ticketType);
    //   this.FormGroup2.controls['ticketTesteur'].setValue(this.editData.ticketTesteur);

    //   this.FormGroup6.controls['casRefCas'].setValue(this.editData.casRefCas);
    //   this.FormGroup6.controls['casResutat'].setValue(this.editData.casResutat);
    //   this.FormGroup6.controls['scenarioRefScenario'].setValue(this.editData.scenarioRefScenario);
    //   this.FormGroup6.controls['scenarioResultat'].setValue(this.editData.scenarioResultat);


    //   this.FormGroup5.controls['anomalieRefAnomalie'].setValue(this.editData.anomalieRefAnomalie);
    //   this.FormGroup5.controls['anomalieTitre'].setValue(this.editData.anomalieTitre);
    //   this.FormGroup5.controls['anomalieCriticite'].setValue(this.editData.anomalieCriticite);
    //   this.FormGroup5.controls['anomalieMotif'].setValue(this.editData.anomalieMotif);
    //   this.FormGroup5.controls['anomalieStatut'].setValue(this.editData.anomalieStatut);
    //   this.FormGroup5.controls['anomaliePriorite'].setValue(this.editData.anomaliePriorite);
    // }
  

  // addManager(){
  //       this.releaseService.postRelease(this.FormGroup1.value)
  //       .subscribe({
  //         next:(res1)=>{
  //           if (this.FormGroup2.value.titre!==null || this.FormGroup2.value.type!==null){
  //             if(this.FormGroup5.value.criticite!==null || this.FormGroup5.value.priorite!==null ||
  //               this.FormGroup5.value.statut!==null || this.FormGroup5.value.enCours!==null || 
  //               this.FormGroup5.value.cloturee!==null){
  //                 this.anomalieService.postAnomalie(this.FormGroup5.value)
  //                   .subscribe({
  //                     next:(res5)=>{
  //                       this.FormGroup2.value.anomalies=res5;
  //                       this.FormGroup2.value.release=res1;
  //                       this.ticketService.postTicket(this.FormGroup2.value)
  //                       .subscribe({
  //                         next:(value) =>{
  //                           this.FormGroup1.reset();
  //                           this.FormGroup2.reset();
  //                           this.FormGroup3.reset();
  //                           this.FormGroup4.reset();
  //                           this.FormGroup5.reset();
  //                           this.router.navigate(['/perimetre'])
  //                         },
  //                       })
  //                     },
  //                     error:()=>{
  //                         alert("Impossible d'ajouter le anomalie seul")
  //                       }
  //                   })
  //               }else{
  //                 this.FormGroup2.value.release=res1;
  //                 this.ticketService.postTicket(this.FormGroup2.value)
  //                 .subscribe({
  //                   next:(value) =>{
                      
  //                   },error:(err) =>{
  //                       alert("Impossible d'envover les donneées du ticket au serveur ");
  //                   },
  //                 })
  //               }
  //           }else{
  //             this.FormGroup1.reset();
  //             this.FormGroup2.reset();
  //             this.FormGroup3.reset();
  //             this.FormGroup4.reset();
  //             this.FormGroup5.reset();
  //             this.router.navigate(['/perimetre'])
  //           }

  //           // if(res1){
  //           //   this.FormGroup2.value.release=res1;
  //           //   this.ticketService.postTicket(this.FormGroup2.value)
  //           //   .subscribe({
  //           //     next:(res2)=>{
  //           //       this.FormGroup3.value.resutat=this.FormGroup6.value.resutat;
  //           //       this.FormGroup3.value.ticket=res2;
  //           //       if(this.FormGroup3.value.resutat!==null){
  //           //         this.casTestService.postCasTest(this.FormGroup3.value)
  //           //         .subscribe({
  //           //           next:(res3)=>{
  //           //             this.FormGroup4.value.scenario=this.FormGroup6.value.scenario;
  //           //             this.FormGroup4.value.casTest=res3;
  //           //             if(this.FormGroup4.value!==null && this.FormGroup4.value!==null){
  //           //               this.scenarioService.postScenario(this.FormGroup4.value)
  //           //               .subscribe({
  //           //                 next:(_res4)=>{
  //           //                 if(this.FormGroup5.value.criticite!==null && this.FormGroup5.value.priorite!==null &&
  //           //                   this.FormGroup5.value.statut!==null && this.FormGroup5.value.en_cours!==null && 
  //           //                   this.FormGroup5.value.cloturee!==null){
  //           //                     this.anomalieService.postAnomalie(this.FormGroup5.value)
  //           //                       .subscribe({
  //           //                         next:(_res5)=>{
  //           //                           this.FormGroup1.reset();
  //           //                           this.FormGroup2.reset();
  //           //                           this.FormGroup3.reset();
  //           //                           this.FormGroup4.reset();
  //           //                           this.FormGroup5.reset();
  //           //                           this.router.navigate(['/perimetre'])
  //           //                         },
  //           //                         error:()=>{
  //           //                             alert("Impossible d'ajouter le anomalie seul")
  //           //                           }
  //           //                       })
  //           //                   }else{
  //           //                     this.FormGroup1.reset();
  //           //                     this.FormGroup2.reset();
  //           //                     this.FormGroup3.reset();
  //           //                     this.FormGroup4.reset();
  //           //                     this.FormGroup5.reset();
  //           //                     this.router.navigate(['/perimetre'])
  //           //                   }
  //           //                 }
  //           //               })
  //           //             }else{
  //           //               this.FormGroup1.reset();
  //           //               this.FormGroup2.reset();
  //           //               this.FormGroup3.reset();
  //           //               this.FormGroup4.reset();
  //           //               this.FormGroup5.reset();
  //           //               this.router.navigate(['/perimetre'])
  //           //             }
  //           //           }
  //           //         })
  //           //       }
  //           //       else{
  //           //         }
  //           //     },
  //           //     error:()=>{
  //           //       alert("Impossible d'ajouter le ticket seul")
  //           //     }
  //           //   })
  //           // }
  //         },
  //         error:()=>{
  //           alert("Impossible d'ajouter un nouveau release")
  //         }
  //       })
  //     }
}
