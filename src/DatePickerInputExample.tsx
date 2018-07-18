import * as React from 'react';
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity,
  IDocumentCardPreviewProps
 } from 'office-ui-fabric-react/lib/DocumentCard';



export class DocumentCardCompleteExample extends React.Component<any, any> {
  
  public render(): JSX.Element {
    const previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          previewImageSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/excel_16x1.svg',
          iconSrc: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/excel_16x1.svg',
          width: 318,
          height: 196,
          accentColor: '#ce4b1f'
        }
      ],
    };
 
    return (
      <DocumentCard onClickHref='http://bing.com'>
        <DocumentCardPreview { ...previewProps } />
        <DocumentCardTitle title='Revenue stream proposal fiscal year 2016 version02.pptx' />
        <DocumentCardActivity
          activity='Created Feb 23, 2016'
          people={
            [
              { name: 'Kat Larrson', profileImageSrc: '' }
            ]
          }
        />
      </DocumentCard>
    );
  }

}