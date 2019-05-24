
public var RemoteIP : String = "kosmos.medien.uni-weimar.de"; //127.0.0.1 signifies a local host (if testing locally
public var SendToPort : int = 1065; //the port you will be sending from
public var ListenerPort : int = 7000; //the port you will be listening on
public var controller : Transform;
public var Lhip = "Lhip";
public var Lshoulder = "Lshoulder";
public var Larm = "Larm";
public var Lforearm = "Lforearm";
public var Lleg = "Lleg";
public var Lfoot = "Lfoot";
public var Lhand = "Lhand";

public var Rhip = "Rhip";
public var Rthigh = "Rthigh";
public var Rshoulder = "Rshoulder";
public var Rarm = "Rarm";
public var Rforearm = "Rforearm";
public var Rleg = "Rleg";
public var Rfoot = "Rfoot";
public var Rhand = "Rhand";

public var head = "head";
public var torso = "torso";

private var handler : Osc;
private var script;
private var body;
private var myhead;
private var avatar;
private var avatarhead;
private var avatarbody;
private var alpha;
private var alpha1;
private var glitch;


//public var MyCube = "cube";

//VARIABLES YOU WANT TO BE ANIMATED
private var Lhip_x : float = 0;
private var Lhip_y : float = 0;
private var Lhip_z : float = 0;

private var Rthigh_x : float = 0;
private var Rthigh_y : float = 0;
private var Rthigh_z : float = 0;

private var Lshoulder_x : float = 0;
private var Lshoulder_y : float = 0;
private var Lshoulder_z : float = 0;

private var Larm_x : float = 0;
private var Larm_y : float = 0;
private var Larm_z : float = 0;

private var Lforearm_x : float = 0;
private var Lforearm_y : float = 0;
private var Lforearm_z : float = 0;

private var Lleg_x : float = 0;
private var Lleg_y : float = 0;
private var Lleg_z : float = 0;

private var Lfoot_x : float = 0;
private var Lfoot_y : float = 0;
private var Lfoot_z : float = 0;

private var Lhand_x : float = 0;
private var Lhand_y : float = 0;
private var Lhand_z : float = 0;

private var Rhip_x : float = 0;
private var Rhip_y : float = 0;
private var Rhip_z : float = 0;

private var Rshoulder_x : float = 0;
private var Rshoulder_y : float = 0;
private var Rshoulder_z : float = 0;

private var Rarm_x : float = 0;
private var Rarm_y : float = 0;
private var Rarm_z : float = 0;

private var Rforearm_x : float = 0;
private var Rforearm_y : float = 0;
private var Rforearm_z : float = 0; 

private var Rleg_x : float = 0;
private var Rleg_y : float = 0;
private var Rleg_z : float = 0;

private var Rfoot_x : float = 0;
private var Rfoot_y : float = 0;
private var Rfoot_z : float = 0;

private var Rhand_x : float = 0;
private var Rhand_y : float = 0;
private var Rhand_z : float = 0;

private var head_x : float = 0;
private var head_y : float = 0;
private var head_z : float = 0;

private var torso_x : float = 0;
private var torso_y : float = 0;
private var torso_z : float = 0;

//private var throttle_x : float = 0;

public function Start ()
{
    //Initializes on start up to listen for messages
    //make sure this game object has both UDPPackIO and OSC script attached
//gameobject spray = GsmeObject.Find
    var udp : UDPPacketIO = GetComponent("UDPPacketIO");
    udp.init(RemoteIP, SendToPort, ListenerPort);

    handler = GetComponent("Osc");
    handler.init(udp);
    handler.SetAllMessageHandler(AllMessageHandler);

    var msg = handler.StringToOscMessage("/configure/port " + ListenerPort); 
    //handler.Send(msg);

    updateSubscriptions();


}

function OnDisable()
{
    // close UDP socket of the listener

    //Debug.Log("Closing UDP socket");

    handler.Cancel();
    //handler = null;

}

//Debug.Log("Running");

function updateSubscriptions() {

   //Debug.Log("Updating subscriptions ...");


    // msg = handler.StringToOscMessage("Hips 50.0 0.0 20.0"); 
    // handler.Send(msg);

    // msg = handler.StringToOscMessage("Head 50.0 0.0 20.0");
    // handler.Send(msg);    

    // msg = handler.StringToOscMessage("Torso 50.0 0.0 20.0");
    // handler.Send(msg);

    //Debug.Log("HeadSendMsg");
    //Debug.Log(msg);
}

function Update () {

    // var move_Lhip = GameObject.Find("KinectRig/Lhip");
    // var move_Lshoulder = GameObject.Find("KinectRig/torso/Lshoulder");
    // var move_Larm = GameObject.Find("KinectRig/torso/Lshoulder/Larm");
    // var move_Lforearm = GameObject.Find("KinectRig/torso/Lshoulder/Larm/Lforearm");
    // var move_Lleg = GameObject.Find("KinectRig/Lhip/Lthigh/Lleg");
    
    // var move_Lhand = GameObject.Find("KinectRig/torso/Lshoulder/Larm/Lforearm/Lhand");
    // var move_Lfoot = GameObject.Find("KinectRig/Lhip/Lthigh/Lleg/Lfoot");
    // var move_Rshoulder = GameObject.Find("KinectRig/torso/Rshoulder");
    // var move_Rarm = GameObject.Find("KinectRig/torso/Rshoulder/Rarm");
    // var move_Rforearm = GameObject.Find("KinectRig/torso/Rshoulder/Rarm/Rforearm");
    // var move_Rleg = GameObject.Find("KinectRig/Rhip/Rthigh/Rleg");
    // var move_Rfoot = GameObject.Find("KinectRig/Rhip/Rthigh/Rleg/Rfoot");
   
    // var move_Rthigh = GameObject.Find("KinectRig/Rhip/Rthigh");
    // var move_Rhip = GameObject.Find("KinectRig/Rhip");
    // var move_head = GameObject.Find("KinectRig/torso/Neck/head"); 
    // var move_torso = GameObject.Find("KinectRig/torso"); 
    // var move_Rhand = GameObject.Find("KinectRig/torso/Rshoulder/Rarm/Rforearm/Rhand");

    //////////

    var move_Lhip = GameObject.Find("me-composite_fixed/Rig/Lhip");
    var move_Lshoulder = GameObject.Find("me-composite_fixed/Rig/torso/Lshoulder");
    var move_Larm = GameObject.Find("me-composite_fixed/Rig/torso/Lshoulder/Larm");
    var move_Lforearm = GameObject.Find("me-composite_fixed/Rig/torso/Lshoulder/Larm/Lforearm");
    var move_Lleg = GameObject.Find("me-composite_fixed/Rig/Lhip/Lthigh/Lleg");
    
    var move_Lhand = GameObject.Find("me-composite_fixed/Rig/torso/Lshoulder/Larm/Lforearm/Lhand");
    var move_Lfoot = GameObject.Find("me-composite_fixed/Rig/Lhip/Lthigh/Lleg/Lfoot");
    var move_Rshoulder = GameObject.Find("me-composite_fixed/Rig/torso/Rshoulder");
    var move_Rarm = GameObject.Find("me-composite_fixed/Rig/torso/Rshoulder/Rarm");
    var move_Rforearm = GameObject.Find("me-composite_fixed/Rig/torso/Rshoulder/Rarm/Rforearm");
    var move_Rleg = GameObject.Find("me-composite_fixed/Rig/Rhip/Rthigh/Rleg");
    var move_Rfoot = GameObject.Find("me-composite_fixed/Rig/Rhip/Rthigh/Rleg/Rfoot");
   
    var move_Rthigh = GameObject.Find("me-composite_fixed/Rig/Rhip/Rthigh");
    var move_Rhip = GameObject.Find("me-composite_fixed/Rig/Rhip");
    var move_head = GameObject.Find("me-composite_fixed/Rig/torso/Neck/head"); 
    var move_torso = GameObject.Find("me-composite_fixed/Rig/torso"); 
    var move_Rhand = GameObject.Find("me-composite_fixed/Rig/torso/Rshoulder/Rarm/Rforearm/Rhand");

    var move_CameraFollow = GameObject.Find("CameraFollow");

    var spray = GameObject.Find("Spray");
    script = spray.GetComponent.<Kvant.Spray>();
    var move_throttle = script.throttle;
    var move_amplitude = script.amplitude;
    var move_drag = script.drag;
    //Debug.Log(move_drag);
    var move_motion = script.motion;

    var avatar = GameObject.Find("me-composite_fixed/bodymesh");
    body = avatar.GetComponent.<Renderer> ();//.material.color.a;
    avatarbody = body.material.color = new Color (1, 1, 1, alpha);//.a;

    var cameraglitch = GameObject.Find("Main Camera");
    glitch = cameraglitch.GetComponent.<Kino.AnalogGlitch> ();

    // var avatarhead = GameObject.Find("me-composite_fixed/headmesh");
    // myhead = avatarhead.GetComponent.<Renderer> ();//.material.color.a;
    // avatarhead = myhead.material.color = new Color (1, 1, 1, alpha);//.a;
    // Debug.Log(avatarhead);

    // Debug.Log(move_throttle);
    //script.throttle = 0;

    //spray.script.throttle = Vector2(throttle_x, throttle_x);
    //var move_cube = GameObject.Find("NiceCube");
    //var move_root = GameObject.Find("Root");

   //move_throttle = Vector3(throttle_x, torso_y, torso_z);
    //Vector3.LerpFUNCTION currrent position and target position and time / delta time

    //move_Lhip.transform.position = Vector3(Lhip_x, Lhip_z,(Lhip_y));

    move_CameraFollow.transform.position = Vector3(torso_x, torso_z, -torso_y);
    
    move_Lshoulder.transform.position = Vector3(Lshoulder_x, Lshoulder_z, -Lshoulder_y);
    move_Lleg.transform.position = Vector3(Lleg_x, Lleg_z, -Lleg_y);
    move_Larm.transform.position = Vector3(Larm_x, Larm_z, -Larm_y);
    move_Lforearm.transform.position = Vector3(Lforearm_x, Lforearm_z, -Lforearm_y);
    move_Lfoot.transform.position = Vector3(Lfoot_x, Lfoot_z, -Lfoot_y); 
    move_Lhip.transform.position = Vector3(Lhip_x, Lhip_z, -Lhip_y);
    move_Lhand.transform.position = Vector3(Lhand_x, Lhand_z, -Lhand_y);

    //move_cube.transform.position = Vector3(Lforearm_x, Lforearm_z, FlipForward(Lforearm_y));
    //move_root.transform.position.y;
    move_Rleg.transform.position = Vector3(Rleg_x, Rleg_z, -Rleg_y);
    move_Rshoulder.transform.position = Vector3(Rshoulder_x, Rshoulder_z, -Rshoulder_y);
    move_Rarm.transform.position = Vector3(Rarm_x, Rarm_z, -Rarm_y);
    move_Rforearm.transform.position = Vector3(Rforearm_x, Rforearm_z, -Rforearm_y);
    move_Rfoot.transform.position = Vector3(Rfoot_x, Rfoot_z, -Rfoot_y);
    move_Rhand.transform.position = Vector3(Rhand_x, Rhand_z, -Rhand_y);
    
    move_Rhip.transform.position = Vector3(Rhip_x, Rhip_z, -Rhip_y);

    move_torso.transform.position = Vector3(torso_x, torso_z, -torso_y);
    move_head.transform.position = Vector3(head_x, head_z, -head_y);  

    //move_throttle.throttle = (throttle_x);
    //var vf = GameObject.Find("vf");
    //vf.transform.Rotate(0, 10*Time.deltaTime,0);


  //  try{
//    }

  //  Debug.Log(Rhip_x); // null reference here ******
    
    // var move_Lhip = GameObject.Find("HumanModel_RigforOSC/Armature/Lhip");
    // var move_Lshoulder = GameObject.Find("HumanModel_RigforOSC/Armature/torso/Lshoulder");
    // var move_Larm = GameObject.Find("HumanModel_RigforOSC/Armature/torso/Lshoulder/Larm");
    // var move_Lforearm = GameObject.Find("HumanModel_RigforOSC/Armature/torso/Lshoulder/Lforearm");
    // var move_Lleg = GameObject.Find("HumanModel_RigforOSC/Armature/Lhip/Lthigh/Lleg");
    // var move_Lfoot = GameObject.Find("HumanModel_RigforOSC/Armature/Lhip/Lthigh/Lleg/Lfoot");
    // var move_Rhip = GameObject.Find("HumanModel_RigforOSC/Armature/Rhip");
    // var move_head = GameObject.Find("HumanModel_RigforOSC/Armature/torso/head"); 
    // var move_torso = GameObject.Find("HumanModel_RigforOSC/Armature/torso"); 


    updateSubscriptions();

    // re-subscribe every 60 frames
    
    if(Time.frameCount % 60 == 1) {
        updateSubscriptions();  
    }
    
}

//These functions are called when messages are received
//Access values via: oscMessage.Values[0], oscMessage.Values[1], etc

public function AllMessageHandler(oscMessage: OscMessage){

    var msgString = Osc.OscMessageToString(oscMessage); //the message and value combined
    var msgAddress = oscMessage.Address; //the message parameters
    var values = oscMessage.Values;
   	Debug.Log(msgString); //log the message and values coming from OSC
    //Debug.Log(msgAddress);
    var v = 0;
    //var spray = GameObject.Find("Spray");

  
    //FUNCTIONS YOU WANT CALLED WHEN A SPECIFIC MESSAGE IS RECEIVED
    switch (msgAddress){

     
        case "/Left_Shoulder":
            Lshoulder_x = values[0];
            Lshoulder_z = values[1];
            Lshoulder_y = values[2];
            break;     

	  	case "/Right_Shoulder":
            Rshoulder_x = values[0];
            Rshoulder_z = values[1];
            Rshoulder_y = values[2];
            break;  

        case "/Left_Elbow":
            Larm_x = values[0];
            Larm_z = values[1];
            Larm_y = values[2];
            break;   

        case "/Right_Elbow":
            Rarm_x = values[0];
            Rarm_z = values[1];
            Rarm_y = values[2];
            break;   
     	
     	case "/Left_Wrist":
        	Lforearm_x = values [0];
        	Lforearm_y = values [2];
        	Lforearm_z = values [1];
        	break;

  		case "/Right_Wrist":
        	Rforearm_x = values [0];
        	Rforearm_y = values [2];
        	Rforearm_z = values [1];
        	break;

        case "/Left_Hand":
            Lhand_x = values[0];
            Lhand_z = values[1];
            Lhand_y = values[2];
            break;   

        case "/Right_Hand":
            Rhand_x = values[0];
            Rhand_z = values[1];
            Rhand_y = values[2];
            break;  

        case "/Left_Hip":
            Lhip_x = values[0];
            Lhip_z = values[1];
            Lhip_y = values[2];
            break;  
        
        case "/Left_Knee":
            Lleg_x = values[0];
            Lleg_z = values[1];
            Lleg_y = values[2];
            break;  

        case "/Left_Foot":
            Lfoot_x = values[0];
            Lfoot_z = values[1];
            Lfoot_y = values[2];
            break;    

         
        // case "/Right_Middle_Distal Phalange":
        //     Rhand_x = values[0];
        //     Rhand_z = values[1];
        //     Rhand_y = values[2];
        //     break;    

        // case "/Right_Elbow":
        //     Rforearm_x = values[0];
        //     Rforearm_z = values[1];
        //     Rforearm_y = values[2];
        //     break;    

        case "/Right_Hip":
            Rhip_x = values[0];
            Rhip_z = values[1];
            Rhip_y = values[2];
            break;  
        
        case "/Right_Knee":
            Rleg_x = values[0];
            Rleg_z = values[1];
            Rleg_y = values[2];
            break;  

        case "/Right_Foot":
            Rfoot_x = values[0];
            Rfoot_z = values[1];
            Rfoot_y = values[2];
            break;  

        case "/Head":
            head_x = values[0];
            head_z = values[1];
            head_y = values[2];
            break;

        case "/Torso":
            torso_x = values[0];
            torso_z = values[1];
            torso_y = values[2];
            break;
       
        case "/1/volume":
           	alpha = values[0];
           	//alpha1 = values[0];
            // script.drag = values[0];
            //script.amplitude = values;	
            //script.drag = values;
            //avatar.GetComponent.<Renderer>().material.color.a;
            //avatarbody = new Color (1, 1, 1, values[0]);
            //alpha = values[0];
            Debug.Log(avatarbody);
            //body.material.color.a = values[0];
	       	break;

	    case "/1/pan":
            script.throttle = values[0];
	    	break;

	    case "/2/fxpar1":
            glitch.scanLineJitter = values[0];
	    	break;

	    // case "/2/fxpar2":
	    // 	script.motion = values[2]+5;
	    // 	break;

        default:

            break;
    }
    
}

//helper function thanks k 
// public function FlipForward (coordinate) { 
//     var offset = 0;
//     return -(coordinate - offset) + offset;
// }

    //FUNCTIONS CALLED BY MATCHING A SPECIFIC MESSAGE IN THE ALLMESSAGEHANDLER FUNCTION
    public function Rotate(msgValue) : void //rotate the cube around its axis
    {
        yRot = msgValue;
    }

 //    public function Throttle(msgValue) : void
 //    {	throttle = values[];
    
	// }