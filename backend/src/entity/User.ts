import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  BeforeInsert
} from "typeorm";
import * as uuid from "uuid/v4";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn("uuid")
  public id: string;

  @Column("varchar", { length: 255 })
  public email: string;

  @Column("text")
  public password: string;

  @BeforeInsert()
  public addId() {
    this.id = uuid();
  }
}
