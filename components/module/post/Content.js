import React, { Component } from "react";
import LazyLoad from 'react-lazyload';
export default class Content extends Component {  
  render() {
  return (
      <LazyLoad className="entry-main-content dropcap">
        <p>Gosh jaguar ostrich quail one excited dear hello and <a href="#">bound</a><sup><a href="#">[1]</a></sup> and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far bald that roadrunner python inside held shrewdly the manatee.</p>
        <p>Thanks sniffed in hello after in foolhardy and some far purposefully much one at the much conjointly leapt skimpily that quail sheep some goodness <a href="#">nightingale</a> the instead exited expedient up far ouch mellifluous altruistic and and lighted more instead much when ferret but the.</p>
        <hr className="section-divider" />
        <p>Yet more some certainly yet alas abandonedly whispered <a href="#">intriguingly</a><sup><a href="#">[2]</a></sup> well extensive one howled talkative admonishingly below a rethought overlaid dear gosh activated less <a href="#">however</a> hawk yet oh scratched ostrich some outside crud irrespective lightheartedly and much far amenably that the elephant since when.</p>
        <h2>The Guitar Legends</h2>
        <p>Furrowed this in the upset <a href="#">some across</a><sup><a href="#">[3]</a></sup> tiger oh loaded house gosh whispered <a href="#">faltering alas</a><sup><a href="#">[4]</a></sup> ouch cuckoo coward in scratched undid together bit fumblingly so besides salamander heron during the jeepers hello fitting jauntily much smoothly globefish darn blessedly far so along bluebird leopard and.</p>
        <blockquote><p>Integer eu faucibus <a href="#">dolor</a><sup><a href="#">[5]</a></sup>. Ut venenatis tincidunt diam elementum imperdiet. Etiam accumsan semper nisl eu congue. Sed aliquam magna erat, ac eleifend lacus rhoncus in.</p></blockquote>
        <p>Fretful human far recklessly while caterpillar well a well blubbered added one a some far whispered rampantly whispered while irksome far clung irrespective wailed more rosily and where saluted while black dear so yikes as considering recast to some crass until cow much less and rakishly overdrew consistent for by responsible oh one hypocritical less bastard hey oversaw zebra browbeat a well.</p>
        <h3>Getting Crypto Rich</h3>
        <p>And far contrary smoked some contrary among stealthy engagingly suspiciously a cockatoo far circa sank dully lewd slick cracked llama the much gecko yikes more squirrel sniffed this and the the much within uninhibited this abominable a blubbered overdid foresaw through alas the pessimistic.</p>
        <p>Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far bald that roadrunner python inside held shrewdly the manatee.</p>
        <hr className="section-divider" />
        <p>Thanks sniffed in hello after in foolhardy and some far purposefully much one at the much conjointly leapt skimpily that quail sheep some goodness nightingale the instead exited expedient up far ouch mellifluous altruistic and and lighted more instead much when ferret but the.</p>
        {/*Begin Subcrible*/}
        <div className="border p-5 bg-lightblue mb-5">
          <div className="row justify-content-between">
            <div className="col-md-5 mb-2 mb-md-0">
              <h5 className="font-weight-bold secondfont mb-3 mt-0">Become a member</h5>
              <p className="small-text">Get the latest news right in your inbox. We never spam!</p>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12">
                  <input type="text" className="form-control" placeholder="Enter your e-mail address" />
                </div>
                <div className="col-md-12 mt-2">
                  <button type="submit" className="btn btn-success btn-block">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Subcrible*/}
        <p>Yet more some certainly yet alas abandonedly whispered intriguingly well extensive one howled talkative admonishingly below a rethought overlaid dear gosh activated less however hawk yet oh scratched ostrich some outside crud irrespective lightheartedly and much far amenably that the elephant since when.</p>
      </LazyLoad>
    );
  }
}