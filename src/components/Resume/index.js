import React from 'react';
import Title from '../../pages/Title';
import './Resume.css'
import { Document, Page ,pdfjs } from 'react-pdf';
import resume from '../../assets/resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends React.Component{
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
            <section>
                <Title title={'Resume'}/>
                <div className="resume-container">
                    <Document file={resume} onLoadSuccess={this.onDocumentLoadSuccess}> 
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
            </section>
        );
    }
}

export default Resume;