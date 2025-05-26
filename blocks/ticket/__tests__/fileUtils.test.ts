import { filterFiles } from '../fileUtils';
import type { FileMetadata } from '../types';

describe('filterFiles', () => {
  describe('should handle invalid inputs', () => {
    it('should return empty array for non-array input', () => {
      expect(filterFiles(null as any)).toEqual([]);
      expect(filterFiles(undefined as any)).toEqual([]);
      expect(filterFiles('not an array' as any)).toEqual([]);
      expect(filterFiles({} as any)).toEqual([]);
    });

    it('should return empty array for empty array input', () => {
      expect(filterFiles([])).toEqual([]);
    });
  });

  describe('should include user-uploaded files properly', () => {
    it('should result in 1 PDF file when user uploads a PDF file via Doc input field', () => {
      const testFiles: FileMetadata[] = [
        {
          reportName: 'pdf-143kB.pdf',
          fileName: 'pdf-143kB.docx',
          fileKey: 'cd4d82c6-0592-486b-8956-4d526b99331d',
          publicKey: '015c47af-8001-475b-a0a6-5327196af347',
          fileType: 'report',
          documentId: '1a41d562-5419-4bdf-8507-96c4e6c56deb',
          documentVersionId: '000f9a96-6cf3-4c08-b41d-58a6d9f99009',
          originalFile: false
        },
        {
          reportName: 'pdf-143kB.pdf',
          fileName: 'pdf-143kB.pdf',
          fileKey: 'cd4d82c6-0592-486b-8956-4d526b99331d',
          publicKey: '015c47af-8001-475b-a0a6-5327196af347',
          fileType: 'report',
          documentId: '1a41d562-5419-4bdf-8507-96c4e6c56deb',
          documentVersionId: '000f9a96-6cf3-4c08-b41d-58a6d9f99009',
          originalFile: true
        }
      ];

      const result = filterFiles(testFiles);
      expect(result).toHaveLength(1);
      expect(result).toEqual([
        {
          reportName: 'pdf-143kB.pdf',
          fileName: 'pdf-143kB.pdf',
          fileKey: 'cd4d82c6-0592-486b-8956-4d526b99331d',
          publicKey: '015c47af-8001-475b-a0a6-5327196af347',
          fileType: 'report',
          documentId: '1a41d562-5419-4bdf-8507-96c4e6c56deb',
          documentVersionId: '000f9a96-6cf3-4c08-b41d-58a6d9f99009',
          originalFile: true
        }
      ]);
    });

    it('should result in 1 DOCX file when user uploads a DOCX file via Doc input field', () => {
      const testFiles: FileMetadata[] = [
        {
          reportName: 'docx-111kB.docx',
          fileName: 'docx-111kB.docx',
          fileKey: 'acdfc920-ae0a-44b5-a754-a1f35c52bf0a',
          publicKey: 'e8fb8e4d-97fb-476f-bcd2-694857db0868',
          fileType: 'report',
          documentId: '4d1fca87-dd9d-4997-af9b-d240e28c5946',
          documentVersionId: '9629cf6c-1c11-44be-9609-93fbdf94fb45',
          originalFile: true
        },
        {
          reportName: 'docx-111kB.docx',
          fileName: 'docx-111kB.pdf',
          fileKey: '95479ffe-0324-4e95-ac86-66416751f073',
          publicKey: 'd5c3edf9-c641-4e8f-957a-a49ae99d7d32',
          fileType: 'report',
          documentId: '4d1fca87-dd9d-4997-af9b-d240e28c5946',
          documentVersionId: '9629cf6c-1c11-44be-9609-93fbdf94fb45',
          originalFile: false
        }
      ];

      const result = filterFiles(testFiles);
      expect(result).toHaveLength(1);
      expect(result).toEqual([
        {
          reportName: 'docx-111kB.docx',
          fileName: 'docx-111kB.docx',
          fileKey: 'acdfc920-ae0a-44b5-a754-a1f35c52bf0a',
          publicKey: 'e8fb8e4d-97fb-476f-bcd2-694857db0868',
          fileType: 'report',
          documentId: '4d1fca87-dd9d-4997-af9b-d240e28c5946',
          documentVersionId: '9629cf6c-1c11-44be-9609-93fbdf94fb45',
          originalFile: true
        }
      ]);
    });

    it('should result in 1 PDF file when user uploads a PDF file via Files input field', () => {
      const testFiles: FileMetadata[] = [
        {
          fileKey: 'aa8b4f17-6a82-40cb-b259-af42e3db146c',
          fileName: 'pdf-143kB.pdf',
          publicKey: '5419f28f-91a9-4af0-ab3e-3fec4763cf06'
        }
      ];

      const result = filterFiles(testFiles);
      expect(result).toHaveLength(1);
      expect(result).toEqual(testFiles);
    });

    it('should result in 1 DOCX file when user uploads a DOCX file via Files input field', () => {
      const testFiles: FileMetadata[] = [
        {
          fileKey: '5cbca78d-6dd9-4162-aeed-8733a961345b',
          fileName: 'docx-111kB.docx',
          publicKey: '4943627d-f491-4bb6-b488-694ca3f3ee4c'
        }
      ];

      const result = filterFiles(testFiles);
      expect(result).toHaveLength(1);
      expect(result).toEqual(testFiles);
    });

    it('should result in 1 MP4 file when user uploads an MP4 file via Files input field', () => {
      const testFiles: FileMetadata[] = [
        {
          fileKey: 'cb756d4c-1e1e-4c8b-b3b8-5afca49a4a18',
          fileName: 'mp4-1.6mb.mp4',
          publicKey: '920bed33-ef6c-49b5-bfee-d0d1b157f2c1'
        }
      ];

      const result = filterFiles(testFiles);
      expect(result).toHaveLength(1);
      expect(result).toEqual(testFiles);
    });
  });

  // Temporary solution:
  // For system-generated files from e.g. Doc Gen block, we will only include the DOCX file
  // Long-term:
  // DEV-15639 Read configuration from each Doc Gen block to determine which files to be included
  describe('should include system-generated files properly', () => {
    it('[interim] should result in just DOCX file for Doc Gen block', () => {
      const testFiles: FileMetadata[] = [
        {
          reportName: 'Document',
          fileName: 'Document.docx',
          fileKey: '4d96ccb7-e2d3-40af-833c-a101dc93859f',
          publicKey: '3e80f331-7753-40c2-a269-edba4d108c36',
          fileType: 'report',
          documentId: 'e31cce5f-cc81-4151-a6fd-6c988fc86042',
          documentVersionId: '3beee9b7-1b91-4d31-a4af-2ccacf3e9135',
          originalFile: false
        },
        {
          reportName: 'Document',
          fileName: 'Document.pdf',
          fileKey: '8b48aa58-04af-46ae-8cb0-bd5945f9e6a4',
          publicKey: 'abf770c8-b013-4738-bf62-ed4093b4ecb7',
          fileType: 'report',
          documentId: 'e31cce5f-cc81-4151-a6fd-6c988fc86042',
          documentVersionId: '3beee9b7-1b91-4d31-a4af-2ccacf3e9135',
          originalFile: false
        }
      ];

      const result = filterFiles(testFiles);
      expect(result).toHaveLength(1);
      expect(result).toEqual([
        {
          reportName: 'Document',
          fileName: 'Document.docx',
          fileKey: '4d96ccb7-e2d3-40af-833c-a101dc93859f',
          publicKey: '3e80f331-7753-40c2-a269-edba4d108c36',
          fileType: 'report',
          documentId: 'e31cce5f-cc81-4151-a6fd-6c988fc86042',
          documentVersionId: '3beee9b7-1b91-4d31-a4af-2ccacf3e9135',
          originalFile: false
        }
      ]);
    });

    it.skip('should result in just PDF file when user selects PDF output format in Doc Gen block configuration', () => {
    });

    it.skip('should result in just DOCX file when user selects DOCX output format in Doc Gen block configuration', () => {
    });

    it.skip('should result in both PDF and DOCX files when user selects both output formats in Doc Gen block configuration', () => {
    });
  });
}); 