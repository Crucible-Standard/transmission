import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('subscriptions')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  name: string;

  @Column({
    nullable: true,
  })
  description: string

  @Column({
    nullable: true,
  })
  url: string

  @Column({
    nullable: false,
    enum: ['physical', 'digital', 'service', 'other'],
  })
  product_type: string


  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}