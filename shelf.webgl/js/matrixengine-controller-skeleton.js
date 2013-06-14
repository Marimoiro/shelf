var MxeDefaultController = function(contents) {
    var score;
    var track;
    var eventproc = MxeDefaultController.eventproc;
    
    //register event listeners
    
    score = contents.scores[0];
    
    score = contents.scores[1];
    
    track = score.tracks[4];
    track.addEventListener("onclick", eventproc.onCastClick004, this, [1,]);
    
    track = score.tracks[6];
    track.addEventListener("onclick", eventproc.onCastClick005, this, [1,]);
    
    track = score.tracks[8];
    track.addEventListener("onclick", eventproc.onCastClick006, this, [1,]);
    
    track = score.tracks[10];
    track.addEventListener("onclick", eventproc.onCastClick007, this, [1,]);
    
    track = score.tracks[12];
    track.addEventListener("onclick", eventproc.onCastClick008, this, [1,]);
    
    track = score.tracks[14];
    track.addEventListener("onclick", eventproc.onCastClick009, this, [1,]);
    
    track = score.tracks[16];
    track.addEventListener("onclick", eventproc.onCastClick010, this, [1,]);
    
    track = score.tracks[18];
    track.addEventListener("onclick", eventproc.onCastClick011, this, [1,]);
    
    track = score.tracks[20];
    track.addEventListener("onclick", eventproc.onCastClick012, this, [1,]);
    
    track = score.tracks[23];
    track.addEventListener("onclick", eventproc.onCastClick013, this, [1,]);
    
    track = score.tracks[25];
    track.addEventListener("onclick", eventproc.onCastClick014, this, [1,]);
    
    track = score.tracks[27];
    track.addEventListener("onclick", eventproc.onCastClick015, this, [1,]);
    
    track = score.tracks[29];
    track.addEventListener("onclick", eventproc.onCastClick016, this, [1,]);
    
    track = score.tracks[31];
    track.addEventListener("onclick", eventproc.onCastClick017, this, [1,]);
    
    track = score.tracks[33];
    track.addEventListener("onclick", eventproc.onCastClick018, this, [1,]);
    
    track = score.tracks[35];
    track.addEventListener("onclick", eventproc.onCastClick019, this, [1,]);
    
    track = score.tracks[37];
    track.addEventListener("onclick", eventproc.onCastClick020, this, [1,]);
    
    track = score.tracks[39];
    track.addEventListener("onclick", eventproc.onCastClick021, this, [1,]);
    
    track = score.tracks[42];
    track.addEventListener("onclick", eventproc.onCastClick022, this, [1,]);
    
    track = score.tracks[44];
    track.addEventListener("onclick", eventproc.onCastClick023, this, [1,]);
    
    track = score.tracks[46];
    track.addEventListener("onclick", eventproc.onCastClick024, this, [1,]);
    
    track = score.tracks[48];
    track.addEventListener("onclick", eventproc.onCastClick025, this, [1,]);
    
    track = score.tracks[50];
    track.addEventListener("onclick", eventproc.onCastClick026, this, [1,]);
    
    track = score.tracks[52];
    track.addEventListener("onclick", eventproc.onCastClick027, this, [1,]);
    
    track = score.tracks[54];
    track.addEventListener("onclick", eventproc.onCastClick028, this, [1,]);
    
    track = score.tracks[56];
    track.addEventListener("onclick", eventproc.onCastClick029, this, [1,]);
    
    track = score.tracks[58];
    track.addEventListener("onclick", eventproc.onCastClick030, this, [1,]);
    
    track = score.tracks[61];
    track.addEventListener("onclick", eventproc.onCastClick031, this, [1,]);
    
    track = score.tracks[63];
    track.addEventListener("onclick", eventproc.onCastClick032, this, [1,]);
    
    track = score.tracks[65];
    track.addEventListener("onclick", eventproc.onCastClick033, this, [1,]);
    
    track = score.tracks[67];
    track.addEventListener("onclick", eventproc.onCastClick034, this, [1,]);
    
    track = score.tracks[69];
    track.addEventListener("onclick", eventproc.onCastClick035, this, [1,]);
    
    track = score.tracks[71];
    track.addEventListener("onclick", eventproc.onCastClick036, this, [1,]);
    
    track = score.tracks[73];
    track.addEventListener("onclick", eventproc.onCastClick037, this, [1,]);
    
    track = score.tracks[75];
    track.addEventListener("onclick", eventproc.onCastClick038, this, [1,]);
    
    track = score.tracks[77];
    track.addEventListener("onclick", eventproc.onCastClick039, this, [1,]);
    
    track = score.tracks[79];
    score.addEventListener("onexitframe", eventproc.onExitFrame002, this, [1,]);
    
    score = contents.scores[2];
    
    score = contents.scores[3];
    
    track = score.tracks[0];
    track.addEventListener("onclick", eventproc.onCastClick000, this, [0,]);
    
    track = score.tracks[1];
    track.addEventListener("onclick", eventproc.onCastClick001, this, [0,]);
    
    
};

MxeDefaultController.eventproc = {};

//=============================================
// SCRIPT CAST 0
//=============================================

MxeDefaultController.eventproc.onCastClick000 = function(e) {
/*-- original script (1-8) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
	// left

	(*if IsRolling = False then
		IsRolling = True;
	end;*)

end;
  -- original script (1-8) -----------------*/
};

//=============================================
// SCRIPT CAST 1
//=============================================

MxeDefaultController.eventproc.onCastClick001 = function(e) {
/*-- original script (1-9) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);

	// right

  TP.Puppet = True;
	TP.Variable.Visible = True;
  //TP.Variable.Rol.Y = Rol_Y;
  //Rol_Y = Rol_Y + 3.14 / 8;  
end;
  -- original script (1-9) -----------------*/
};

//=============================================
// SCRIPT CAST 2
//=============================================

MxeDefaultController.eventproc.onExitFrame002 = function(e) {
/*-- original script (1-12) -----------------
OnEvent ExitFrame(Score,Track: Integer);
var
	i:integer;
begin
	(*if IsRolling
		Rol_Y = Rol_Y + Rol_YV;
		
		if (Rol_Y mod 90) = 0
			IsRolling = False;
		end
	end*)
end;
  -- original script (1-12) -----------------*/
};

//=============================================
// SCRIPT CAST 3
//=============================================

/*-- original script (3-7) -----------------
var
	Rol_Y:Integer = 0;
	Rol_YV:Integer = 0;
	Rol_YS:Integer = 0; (* 0, 1, 2, 3 の遷移 *)
	IsRolling:Boolean = false;
  -- original script (3-7) -----------------*/

//=============================================
// SCRIPT CAST 4
//=============================================

MxeDefaultController.eventproc.onCastClick004 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 0
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 5
//=============================================

MxeDefaultController.eventproc.onCastClick005 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 1
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 6
//=============================================

MxeDefaultController.eventproc.onCastClick006 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 2
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 7
//=============================================

MxeDefaultController.eventproc.onCastClick007 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 3
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 8
//=============================================

MxeDefaultController.eventproc.onCastClick008 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 4
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 9
//=============================================

MxeDefaultController.eventproc.onCastClick009 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 5
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 10
//=============================================

MxeDefaultController.eventproc.onCastClick010 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 6
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 11
//=============================================

MxeDefaultController.eventproc.onCastClick011 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 7
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 12
//=============================================

MxeDefaultController.eventproc.onCastClick012 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 8
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 13
//=============================================

MxeDefaultController.eventproc.onCastClick013 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 9
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 14
//=============================================

MxeDefaultController.eventproc.onCastClick014 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 10
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 15
//=============================================

MxeDefaultController.eventproc.onCastClick015 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 11
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 16
//=============================================

MxeDefaultController.eventproc.onCastClick016 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 12
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 17
//=============================================

MxeDefaultController.eventproc.onCastClick017 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 13
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 18
//=============================================

MxeDefaultController.eventproc.onCastClick018 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 14
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 19
//=============================================

MxeDefaultController.eventproc.onCastClick019 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 15
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 20
//=============================================

MxeDefaultController.eventproc.onCastClick020 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 16
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 21
//=============================================

MxeDefaultController.eventproc.onCastClick021 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 17
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 22
//=============================================

MxeDefaultController.eventproc.onCastClick022 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 18
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 23
//=============================================

MxeDefaultController.eventproc.onCastClick023 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 19
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 24
//=============================================

MxeDefaultController.eventproc.onCastClick024 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 20
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 25
//=============================================

MxeDefaultController.eventproc.onCastClick025 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 21
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 26
//=============================================

MxeDefaultController.eventproc.onCastClick026 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 22
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 27
//=============================================

MxeDefaultController.eventproc.onCastClick027 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 23
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 28
//=============================================

MxeDefaultController.eventproc.onCastClick028 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 24
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 29
//=============================================

MxeDefaultController.eventproc.onCastClick029 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 25
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 30
//=============================================

MxeDefaultController.eventproc.onCastClick030 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 26
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 31
//=============================================

MxeDefaultController.eventproc.onCastClick031 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 27
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 32
//=============================================

MxeDefaultController.eventproc.onCastClick032 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 28
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 33
//=============================================

MxeDefaultController.eventproc.onCastClick033 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 29
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 34
//=============================================

MxeDefaultController.eventproc.onCastClick034 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 30
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 35
//=============================================

MxeDefaultController.eventproc.onCastClick035 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 31
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 36
//=============================================

MxeDefaultController.eventproc.onCastClick036 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 32
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 37
//=============================================

MxeDefaultController.eventproc.onCastClick037 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 33
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 38
//=============================================

MxeDefaultController.eventproc.onCastClick038 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 34
end;
  -- original script (1-3) -----------------*/
};

//=============================================
// SCRIPT CAST 39
//=============================================

MxeDefaultController.eventproc.onCastClick039 = function(e) {
/*-- original script (1-3) -----------------
OnEvent CastClick(Score,Track,Button,X,Y: Integer);
// panel 35
end;
  -- original script (1-3) -----------------*/
};

MxePlayer.registerControllerClass(MxeDefaultController);
