
export const Cards = ({details}) => {
  // console.log(details)
  return (
    <>
    <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{details.plan}</h5>
      <h6 className="card-price text-center">${details.price}<span className="period">/month</span></h6>
      <hr/>
      <ul className="fa-ul">
        <li className={details.isUser?"":"text-muted"}><span className="fa-li"><i className={details.isUser?"fas fa-check":"fas fa-times"}></i></span>{details.plan!=="FREE"?<b>{details.user}</b>:details.user}</li>
        <li className={details.isStorage?"":"text-muted"}><span className="fa-li"><i className={details.isStorage?"fas fa-check":"fas fa-times"}></i></span>{details.storage}</li>
        <li className={details.isPublicProjects?"":"text-muted"}><span className="fa-li"><i className={details.isPublicProjects?"fas fa-check":"fas fa-times"}></i></span>{details.publicProjects}</li>
        <li className={details.isCommunityAccess?"":"text-muted"}><span className="fa-li"><i className={details.isCommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{details.communityAccess}</li>
        <li className={details.isPrivateProjects?"":"text-muted"}><span className="fa-li"><i className={details.isPrivateProjects?"fas fa-check":"fas fa-times"}></i></span>{details.privateProjects}</li>
        <li className={details.isPhoneSupport?"":"text-muted"}><span className="fa-li"><i className={details.isPhoneSupport?"fas fa-check":"fas fa-times"}></i></span>{details.phoneSupport}</li>
        <li className={details.isSubDomain?"":"text-muted"}><span className="fa-li"><i className={details.isSubDomain?"fas fa-check":"fas fa-times"}></i></span>{details.plan==="PRO"?<><b>Unlimited</b> {details.subDomain}</>:details.subDomain}</li>
        <li className={details.isReports?"":"text-muted"}><span className="fa-li"><i className={details.isReports?"fas fa-check":"fas fa-times"}></i></span>{details.reports}</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
