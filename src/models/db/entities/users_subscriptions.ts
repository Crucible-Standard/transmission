import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Users } from "./users";
import { Subscriptions } from "./subscriptions";

@Entity('users_subscriptions')
export class Users_Subscriptions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    enum: ['active', 'inactive', 'pending'],
    default: 'pending',
  })
  status: string;

  @Column()
  userId: number;

  @Column()
  subscriptionId: number;

  @ManyToOne(type => Users, user => user.watchers)
  user: Users;

  @ManyToOne(type => Subscriptions, user => user.watchers)
  subscription: Subscriptions;
}