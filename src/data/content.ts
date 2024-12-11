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
    AllowId: 'รหัสการแข่งขันนักกีฬา',
    ClubId: 'รหัสสโมสร',
    ClubName: 'ชื่อสโมสร',
    CompEvent: 'รหัสรายการแข่งขัน',
    Index: 'ลำดับ',
    Competition: {
        AssociationCert: 'ใบสัญญาร่วม TAA',
        CloseDay: 'เวลาปิดการแข่งขัน (Unix)',
        CloseRegis: 'เวลาปิดการรับสมัคร (Unix)',
        CloseRegisString: 'เวลาปิดการรับสมัคร',
        ClubIds: 'รหัสสโมสรที่สมัครการแข่งขัน (Array)',
        ClubIdsJson: 'รหัสสโมสรที่สมัครการแข่งขัน (JSON)',
        Description: 'หมายเหตุการแข่งขัน',
        EditRecord: 'มีการแก้ไขผลการแข่งขัน',
        EndDayString: 'เวลาจบการแข่งขัน',
        FileAthlete: 'ไฟล์รายชื่อนักกีฬา',
        FileNameDocument: 'ชื่อไฟล์รายชื่อนักกีฬา',
        FileNameImportFile: 'ชื่อไฟล์รายชื่อนักกีฬา (ImportFile)',
        FileNameResult: 'ไฟล์ผลการแข่งขัน',
        FileTeamManagerFile: 'ไฟล์ผู้จัดการทีม',
        Id: 'รหัสการแข่งขัน',
        ImageUrl: 'URL รูปภาพหน้าปกการแข่งขัน',
        ImportComplete: 'จำนวน ImportFile สำเร็จ',
        ImportUnComplete: 'จำนวน ImportFile ล้มเหลว',
        IsCondition: 'เข้า TAA แบบมีเงื่อนไข?',
        IsDeletable: 'ลบการแข่งขันได้?',
        IsHaveRecord: 'มีผลการแข่งขัน?',
        IsHighLight: 'เป็นการแข่งขันหลัก?',
        LastModifyRecord: 'แก้ไขล่าสุด',
        LiveResult: 'ผลการแข่งขันสด',
        Location: 'ตำแหน่งสนามแข่งขัน',
        Name: 'การแข่งขัน',
        NameEn: 'การแข่งขัน (EN)',
        NameFolder: 'การแข่งขัน (Folder Name)',
        OpenRegis: 'เวลาเปิดรับสมัครการแข่งขัน (Unix)',
        OpenRegisString: 'เวลาเปิดรับสมัครการแข่งขัน',
        PathFileAthlete: 'ตำแหน่งไฟล์รายชื่อนักกีฬา',
        PathFileNameDocument: 'ตำแหน่งชื่อไฟล์รายชื่อนักกีฬา',
        PathFileNameImportFile: 'ตำแหน่งชื่อไฟล์รายชื่อนักกีฬา (ImportFile)',
        PathFileNameResult: 'ตำแหน่งไฟล์ผลการแข่งขัน',
        PathFileTeamManagerFile: 'ตำแหน่งไฟล์ผลการแข่งขัน',
        PicFile: 'ไฟล์ URL รูปภาพหน้าปกการแข่งขัน',
        PoolLengthId: 'ขนาดสระ',
        RecordOpen: 'เวลาเปิดผลการแข่งขัน',
        RecordClose: 'เวลาปิดผลการแข่งขัน',
        StartDay: 'เวลาเปิดการแข่งขัน (Unix)',
        StartDayString: 'เวลาเปิดการแข่งขัน',
        Status: 'สถานะการแข่งขัน',
        StatusImport: 'การนำเข้าสถานะการแข่งขัน',
        StatusImportId: 'รหัสการนำเข้าสถานะการแข่งขัน',
        SwimmingType: 'ประเภทการแข่งขัน',
    },
    CompetitionRoundType: 'ประเภทการแข่งขัน',
    Course: 'คอร์ดการแข่งขัน',
    FirstName: 'ชื่อ',
    FirstName_th: 'ชื่อ (TH)',
    LastName: 'นามสกุล',
    LastName_th: 'นามสกุล (TH)',
    FullName: 'ชื่อ-สกุล',
    FullName_th: 'ชื่อ-สกุล (TH)',
    IdNumber: 'รหัสนักกีฬา',
    ListSplirt: 'รายชื่อการแข่งขันนักกีฬา',
    Nation: 'สัญชาติ',
    Number: 'หมายเลขการแข่งขัน',
    Place: 'ลำดับการแข่งขัน',
    Prelim: 'การแข่งรอบคัดเลือก',
    Reason: 'หมายเหตุ',
    Row: 'ลู่แข่งขัน',
    Time: 'เวลา',
    TimeBehind: 'เวลาเก่า',
    TimeFormat: 'รูปแบบเวลา',
    Times: 'สถิติทั้งหมด',
    UserId: 'รหัสนักกีฬา',
};

export type RankingData = {
    draw: 1;
    recordsFiltered: number;
    recordsTotal: number;
    data: AthleteRankingData[];
};

export type Metadata = {
    columns: string[];
    start: number;
    end: number;
    truncate: boolean;
    charLimit: number;
    margins: {
        x: number;
        y: number;
    };
};

export const content = ref<[RankingData, Metadata][]>([]);
