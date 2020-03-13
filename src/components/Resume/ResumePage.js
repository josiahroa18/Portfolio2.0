import React from 'react';
import Title from '../Title';
import { ContentContainer } from '../../styles/StyledComponents';
import './Resume.css'
import { Document, Page ,pdfjs } from 'react-pdf';
import resume from '../../assets/resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ResumePage extends React.Component{
    state = {
        numPages: null,
        pageNumber: 1,
    }
     
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render(){
        const { pageNumber} = this.state;
        return(
            <ContentContainer>
                <Title title={'Resume'}/>
                <div className="resume-container">
                    <Document file={resume} onLoadSuccess={this.onDocumentLoadSuccess}> 
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
                <button></button>
            </ContentContainer>
        );
    }
    
}

export default ResumePage;