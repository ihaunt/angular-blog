import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
	private id: string | null = '';
	photoCover: string = '';
	contentTitle: string = '';
	contentDescription: string ='';

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((value) =>
		(this.id = value.get('id')));
		this.setValuesToComponent(this.id)

	}

	setValuesToComponent(id: string |null) {
		const result = dataFake.filter((article) => article.id.toString() === id)[0];
		this.id = result.id
		this.contentTitle = result.title
		this.photoCover = result.photoCover
		this.contentDescription = result.description
	}
}
