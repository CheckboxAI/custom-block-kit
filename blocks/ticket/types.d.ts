export type FileMetadata = {
    fileKey: string;
    fileName: string;
    publicKey: string;
    // below are optional, not present in file input uploads
    reportName?: string;
    fileType?: string;
    documentId?: string;
    documentVersionId?: string;
    originalFile?: boolean;
};