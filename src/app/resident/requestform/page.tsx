'use client'
import {Button, Title, Wrapper} from "@/app/resident/components/Header/styled";
import {usePathname, useRouter} from "next/navigation";

export default function Requestform() {
    const router = useRouter();

    function homeHandler() {
        router.push('/resident/homepage')
    }

    function logoutHandler() {
        router.push('/')    
    }

    // return (
    // <>
        // <Wrapper>
        //     <Button onClick={homeHandler}>Home</Button>
        //     <Button onClick={logoutHandler}>Log Out</Button>
        // </Wrapper>
        // <div style={{ textAlign: 'center', marginTop: '20px' }}>
        //     <h1 style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Request Form</h1>
        // </div>
    // </>
    // );
    
  return (
    <>
        <Wrapper>
            <Button onClick={homeHandler}>Home</Button>
            <Button onClick={logoutHandler}>Log Out</Button>
        </Wrapper>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1 style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Request Form</h1>
        </div>
      
      {/* Request Form Section */}
      <div style={{ textAlign: 'left', padding: '20px' }}>
        <form style={{ maxWidth: '600px', margin: '0 auto', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          {/* Resident Details */}
          <div style={{ marginBottom: '20px' }}>
            <label>
              <strong>Resident Name:</strong>
              <input type="text" name="residentName" style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
            </label>
            <label>
              <strong>NRIC:</strong>
              <input type="text" name="nric" style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
            </label>
            <label>
              <strong>Date & Time of Request:</strong>
              <input type="datetime-local" name="dateTimeOfRequest" style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
            </label>
          </div>
          
          {/* Resident's Request */}
          <div style={{ marginBottom: '20px' }}>
            <label>
              <strong>Resident's Request:</strong>
              <textarea name="residentRequest" rows={10} style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
            </label>
          </div>

          {/* Resident's Signature
          <div style={{ marginBottom: '20px' }}>
            <label>
              <strong>Resident's Signature:</strong>
              <input type="text" name="residentSignature" style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
            </label>
          </div> */}

          {/* Verified By */}
          <div style={{ marginBottom: '20px' }}>
            <label>
              <strong>Verified By:</strong>
              <input type="text" name="verifiedBy" style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
            </label>
            {/* <label>
              <strong>Request Status (Approved / Not Approved):</strong>
              <select name="requestStatus" style={{ width: '100%', padding: '8px', margin: '8px 0' }}>
                <option value="approved">Approved</option>
                <option value="notApproved">Not Approved</option>
              </select>
            </label> */}
          </div>

          {/* Approved Duration */}
          <div style={{ marginBottom: '20px' }}>
            <label>
              <strong>Approved Duration (Date & Time):</strong>
              <input type="datetime-local" name="approvedDuration" style={{ width: '100%', padding: '8px', margin: '8px 0' }} />
            </label>
          </div>
          
          <button type="submit" style={{textAlign: 'center', padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>Submit</button>
        </form>
      </div>
    </>
  );
};

