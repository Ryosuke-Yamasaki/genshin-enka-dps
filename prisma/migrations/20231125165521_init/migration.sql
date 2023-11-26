-- CreateTable
CREATE TABLE "targets" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" VARCHAR(100),
    "character_id" INTEGER NOT NULL,
    "character_level_id" INTEGER NOT NULL,
    "normal_attack_level" INTEGER NOT NULL,
    "elemental_skill_level" INTEGER NOT NULL,
    "elemental_burst_level" INTEGER NOT NULL,
    "constellation_rank" INTEGER NOT NULL,
    "weapon_id" INTEGER NOT NULL,
    "weapon_level_id" INTEGER NOT NULL,
    "refinement_rank" INTEGER NOT NULL,
    "flower_artifact_manager_id" TEXT,
    "plume_artifact_manager_id" TEXT,
    "sands_artifact_manager_id" TEXT,
    "goblet_artifact_manager_id" TEXT,
    "circlet_artifact_manager_id" TEXT,
    "character1_buff" INTEGER,
    "character2_buff" INTEGER,
    "character3_buff" INTEGER,
    "weapon1_buff" INTEGER,
    "weapon2_buff" INTEGER,
    "weapon3_buff" INTEGER,
    "artifact1_buff" INTEGER,
    "artifact2_buff" INTEGER,
    "artifact3_buff" INTEGER,
    "elemental_resonance1_buff" INTEGER,
    "elemental_resonance2_buff" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "targets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artifact_managers" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" VARCHAR(100),
    "artifact_id" INTEGER NOT NULL,
    "main_stat_id" INTEGER NOT NULL,
    "sub1_stat_name_id" INTEGER NOT NULL,
    "sub2_stat_name_id" INTEGER NOT NULL,
    "sub3_stat_name_id" INTEGER NOT NULL,
    "sub4_stat_name_id" INTEGER NOT NULL,
    "sub1_number" DECIMAL(9,4) NOT NULL,
    "sub2_number" DECIMAL(9,4) NOT NULL,
    "sub3_number" DECIMAL(9,4) NOT NULL,
    "sub4_number" DECIMAL(9,4) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "artifact_managers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "targets" ADD CONSTRAINT "targets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "artifact_managers" ADD CONSTRAINT "artifact_managers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
