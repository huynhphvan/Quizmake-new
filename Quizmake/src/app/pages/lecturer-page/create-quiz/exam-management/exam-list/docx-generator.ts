import * as docx from "docx";
import { Paragraph, Document, HeadingLevel, TextRun, AlignmentType } from 'docx';

export class DocumentCreator {
    // tslint:disable-next-line: typedef
    count = 1;
    public create(examList: any, examNumber: number): Document {
        const document = new Document();
        document.addSection({
            children: [
                new Paragraph({
                    text: `Đề số ${examNumber}`,
                    heading: HeadingLevel.TITLE,
                    alignment: AlignmentType.CENTER,
                }),
              ...examList
              .map((quiz) => {
                const arr: Paragraph[] = [];
                arr.push(
                    this.createQuizBox(quiz, this.count++)
                );
                return arr;
              })
              .reduce((prev, curr) => prev.concat(curr), []),
            ],
        });

        return document;
    }

    public createQuizBox(quiz: any, count: number): Paragraph {
        console.log(quiz);

        return new Paragraph({
            children: [
                new TextRun(`${count}. ${quiz.point ? quiz.point : ''}`).break(),
                new TextRun(`${quiz.question}`).break(),
                new TextRun(`A. ${quiz.answers[0]}`).break(),
                new TextRun(`B. ${quiz.answers[1]}`).break(),
                new TextRun(`C. ${quiz.answers[2]}`).break(),
                new TextRun(`D. ${quiz.answers[3]}`).break(),
            ]
        });
    }
}