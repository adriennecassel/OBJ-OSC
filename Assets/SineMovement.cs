using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RandomMovement : MonoBehaviour {

 //public float speedUpDown = 1;
 //public float distanceUpDown = 1;
 public float distance = 1;
 public float speed = 1;
 
 void Update () 
 {
         //Vector3 mov = new Vector3 (transform.position.x, Mathf.Sin(speedUpDown * Time.time) * distanceUpDown, transform.position.z);
         Vector3 mov = new Vector3 (Mathf.Sin(speed * Time.time) * distance, transform.position.y, transform.position.z);
         transform.position = mov;
     }
 }