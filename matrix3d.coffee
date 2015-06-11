matrix3d = {}
Object.defineProperties matrix3d,
	value:
		get: ->
			"matrix3d(#{@scaleX},0,0,0,0,#{@scaleY},0,0,0,0,1,#{@translateX},#{@translateY},0,0,#{@scale})"
		set: (m3d='') ->
			# TODO hendle errors
			if ~m3d.indexOf('(') and ~m3d.indexOf(')')
				m3d = m3d.substring  m3d.indexOf('(')+1, m3d.length-1
			m3d = m3d.split(',').map (val) -> return +val.trim()
			@scaleX =  m3d[0]
			@scaleY =  m3d[5]
			@scale = m3d[15]
			@translateX = m3d[11]
			@translateY = m3d[12]
			return
	scale:
		value: 3
		writable: true
		enumerable: true
	scaleX:
		value: 1
		writable: true
		enumerable: true
	scaleY:
		value: 1
		writable: true
		enumerable: true
	translateX:
		value: 0
		writable: true
		enumerable: true
	translateY:
		value: 0
		writable: true
		enumerable: true
