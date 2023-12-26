const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    project_name: {
        type: String,
        required: true,
        trim: true,
        match: ""
    },
    teacher_id: {
        type: ObjectId,
        required: true
    },
    course_id: {
        type: ObjectId,
        required: true
    },
    faculty_id: {
        type: ObjectId,
        required: true
    },
    commentary: {
        type: String,
        required: false
    },
    work_type_id: {
        type: ObjectId,
        required: true
    },
    calendar_period_id: {
        type: ObjectId,
        required: true
    },
    applied_student_id: {
        type: ObjectId,
        required: false
    },
    status_id: {
        type: ObjectId,
        required: true
    }
});

const Project = mongoose.model('projects', projectSchema);

module.exports = Project;