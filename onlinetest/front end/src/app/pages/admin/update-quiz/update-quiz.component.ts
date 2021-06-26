import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  qId = 0;
  quiz: any = null;
  category: any = [];
  constructor(private _route: ActivatedRoute, private _quiz: QuizService, private _category: CategoryService, private _router: Router) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params.qId;
    // alert(this.qId);
    this._quiz.getQuiz(this.qId).subscribe(
      (data: any) => {
        this.quiz = data;
        console.log(data);
      },
      (error) => {

      }
    );

    this.category = this._category.categories().subscribe(
      (data: any) => {
        this.category = data;
      },
      (error) => {
        console.log(error);
      }
    );

  }

  updateQuiz() {
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data: any) => {
        Swal.fire("Success", "Quiz has been updated successfully", 'success').then((e) => {
          this._router.navigate(['/admin/quizzes']);
        });
      },
      (error) => {
        console.log(error);
        Swal.fire("Error", 'Server Error', 'error');
      }
    );
  }

}
