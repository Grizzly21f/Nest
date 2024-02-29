import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1709122006068 implements MigrationInterface {
    name = 'FirstMigration1709122006068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "age" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "age"`);
    }

}
