import { ref } from 'vue';

// TODO: Make an athlete data table.
export type AthleteRankingData = {
    Age: number;
    AllowId: number;
    ClubId: number;
    ClubName: string;
    CompEvent: string | number | null;
    Competition: {
        AssociationCert: number | null;
        CloseDay: string | null;
        CloseRegis: string | null;
        CloseRegisString: string;
        ClubIds: number[] | null;
        ClubIdsJson: object | null;
        Description: string | null;
        EditRecord: number;
        EndDayString: string | null;
        FileAthlete: string | null;
        FileNameDocument: string | null;
        FileNameImportFile: string | null;
        FileNameResult: string | null;
        FileTeamManagerFile: string | null;
        Id: number;
        ImageUrl: string | null;
        ImportComplete: number;
        ImportUnComplete: number;
        IsCondition: number;
        IsDeletable: number;
        IsHaveRecord: number;
        IsHighLight: number;
        LastModifyRecord: string | null;
        LiveResult: number;
        Location: string | null;
        Name: string;
        NameEn: string | null;
        NameFolder: string | null;
        OpenRegis: string | null;
        OpenRegisString: string | null;
        PathFileAthlete: string | null;
        PathFileNameDocument: string | null;
        PathFileNameImportFile: string | null;
        PathFileNameResult: string | null;
        PathFileTeamManagerFile: string | null;
        PicFile: string | null;
        PoolLengthId: 0 | 1;
        RecordOpen: string | null;
        RecordClose: string | null;
        StartDay: string | null;
        StartDayString: string | null;
        Status: number;
        StatusImport: number | string | null;
        StatusImportId: number;
        SwimmingType: number;
    };
    CompetitionRoundType: number;
    Course: number | null;
    FirstName: string;
    FirstName_th: string | null;
    LastName: string;
    LastName_th: string | null;
    FullName: string;
    FullName_th?: string | null;
    IdNumber?: number | null;
    ListSplirt: number | string | null;
    Nation: string;
    Number: number | null;
    Place: string;
    Prelim: string | null;
    Reason: string | null;
    Row: number | null;
    Time: string;
    TimeBehind: string | null;
    TimeFormat: string | null;
    Times: number;
    UserId: number;
};

export const ThaiRankingTranslation = {
    Age: 'อายุ',
    ClubId: 'รหัสสโมสร',
    ClubName: 'ชื่อสโมสร',
    FirstName: 'ชื่อ',
    LastName: 'นามสกุล',
    FullName: 'ชื่อ-นามสกุล',
    UserId: 'รหัสนักกีฬา',
    Time: 'เวลา',
    Nation: 'สัญชาติ',
    Prelim: 'การแข่งรอบคัดเลือก',
    Reason: 'หมายเหตุ',
    Index: 'ลำดับ',
    Competition: {
        OpenRegis: 'เวลาเปิดรับสมัคร',
        CloseRegis: 'เวลาปิดรับสมัคร',
        StartDay: 'เริ่มการแข่งขัน',
        CloseDay: 'สิ้นสุดการแข่งขัน',
        Description: 'คำอธิบาย',
        EditRecord: 'มีการแก้ไขสถิติ',
        Id: 'รหัสการแข่งขัน',
        Location: 'ตำแหน่งสนามกีฬา',
        Name: 'การแข่งขัน',
        NameEn: 'การแข่งขัน (EN)',
        PoolLengthId: 'ขนาดสระ',
    },
};

export type RankingData = {
    draw: 1;
    recordsFiltered: number;
    recordsTotal: number;
    data: AthleteRankingData[];
};

export type Metadata = {
    columns: string[];
    length: number;
    truncate: boolean;
    charLimit: number;
    margins: {
        x: number;
        y: number;
    };
};

export const content = ref<[RankingData, Metadata][]>([]);
