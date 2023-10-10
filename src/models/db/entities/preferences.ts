/** 
 * preferences are related to a user's subscriptions, and are used to determine notification and other settings to user
 * @param {number} id - unique identifier for the preference
 * @param {string} name - name of the preference
 * @param {string} description - description of the preference
 * @param {string} url - url of the preference
 * @param {number} subscriptionId - id of the subscription the preference is related to
 * @param {number} userId - id of the user the preference is related to
 * 
 */

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity('preferences')
export class Preferences {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subscriptionId: number;

  @Column()
  userId: number;

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

  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}