import React  from 'react';

import { makeStyles } from '@material-ui/styles';

import { Layout } from '../components';

// PDFviewer
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const useStyles = makeStyles(() => ({
  imgWrapper: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    minHeight: 792,
    width: '100%',
    marginTop: 40,
  },
}));

export default function Resume() {
  const classes = useStyles();
  const [state, setState] = React.useState(window.innerWidth);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const assetsURL = process.env.PUBLIC_URL + "/assets";
  const resumePDF = assetsURL + '/about/RodneyMartinez-Resume_01.2021.pdf';
  const resumePNG = assetsURL + '/about/RodneyMartinez-Resume_01.2021.png';

  const resizeContent = () => {
    setState({ ...state });
  }
  window.onresize = resizeContent;

    return (
      <Layout>
        {window.innerWidth > 662 
        ? 
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer 
              fileUrl={resumePDF}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
          :
          <div className={classes.imgWrapper} style={{backgroundImage: `url(${resumePNG})`}}>
          </div>
        }
      </Layout>
    );
}