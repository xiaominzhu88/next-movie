import React from 'react';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import { EmailIcon, TwitterIcon, LinkedinIcon } from 'react-share';
import { GitHub } from 'react-feather';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={
            <Popover
              id="popover-positioned-bottom"
              style={{
                height: '46px',
              }}
            >
              <Popover.Content>
                <a
                  style={{ marginRight: '0.5em' }}
                  href="https://twitter.com/Zhu23592976"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon size={32} round={true} />
                </a>
                <a
                  style={{ marginRight: '0.5em' }}
                  href="https://www.linkedin.com/in/xiaominzhu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon size={32} round={true} />
                </a>
                <a
                  style={{ marginRight: '0.5em' }}
                  href="https://github.com/xiaominzhu88"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub size={29} color="#00aced" />
                </a>
              </Popover.Content>
            </Popover>
          }
        >
          {/* for this usehand, add bootstrap css on _app.js page as global */}
          <Button
            style={{
              height: '35px',
              fontSize: '0.8em',
              fontFamily: 'monospace',
            }}
            variant="outline-primary"
          >
            Network
          </Button>
        </OverlayTrigger>

        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={
            <Popover
              style={{
                height: '46px',
              }}
              id="popover-positioned-bottom"
            >
              <Popover.Content>
                <a href={`mailto:example@movie.com`}>
                  <EmailIcon size={29} round={true} />
                </a>
              </Popover.Content>
            </Popover>
          }
        >
          <Button
            style={{
              height: '35px',
              fontSize: '0.8em',
              fontFamily: 'monospace',
            }}
            variant="outline-primary"
          >
            E-mail
          </Button>
        </OverlayTrigger>

        <style jsx>{`
          .footer {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0 auto;
            font-weight: 800;
            background-color: #18465c;
            box-shadow: 5px 11px 18px rgba(0, 0, 0, 0.33);
            text-align: center;
            padding: 25px;
            flex: 1;
            width: 100vw;
            font-family: monospace;
          }
          @media (max-width: 699px) {
            .footer {
              bottom: 0;
              position: fixed;
              width: 100vw;
              height: 40px;
            }
          }
        `}</style>
      </div>
    </>
  );
}
