//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Post')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  title: string;

  @Column('text', { nullable: true })
  content: string;

  @Column('text', { nullable: true })
  subject: string;

  @Column('integer', { nullable: true })
  author: number;

  @Column('date', { nullable: true })
  postDate: Date;
}
